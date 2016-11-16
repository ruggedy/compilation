import {
	AfterViewInit,
	Component,
	EventEmitter,
	Inject,
	Input,
	NgZone,
	OnChanges,
	OnDestroy,
	OpaqueToken,
	Optional,
	Output
} from "@angular/core";

declare var tinymce;

@Component({
	selector: "tinymce",
	templateUrl: "./tinymce.component.html",
	styleUrls: ['./tinymce.component.scss']
})
export class TinyMCEComponent implements OnChanges, AfterViewInit, OnDestroy {

	@Input() readonly: boolean = false;
	@Input() id: string;
	@Input()initialValue: string = "";
	@Input() options: any = {
		noneditable_noneditable_class: 'fa',
		plugins: [
			"advlist autolink lists link image imagetools charmap print preview anchor",
			"searchreplace visualblocks code fullscreen",
			"insertdatetime media table contextmenu paste",
			"textcolor colorpicker",
			"wordcount","media ",
			'fontawesome noneditable'
		],
		menubar: "insert",
		toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | forecolor backcolor | media | fontawesome",
		extended_valid_elements: 'span[*]'
	};
	@Output() contentChange = new EventEmitter();
	@Output() blur = new EventEmitter();
	@Output() focus = new EventEmitter();

	baseURL: string = "";

	private editor: any = null;
	

	constructor(private zone: NgZone) {

	}

	ngAfterViewInit() {
		this.createEditor();
	}

	ngOnChanges(changes) {
		if (this.editor && changes["readonly"]) {
			this.removeEditor();
			this.createEditor();
		}
	}

	// TinyMCE triggers an error if the DOM elements it created are
	// inexistent which is the case if this component if located in
	// a structural block (*ngIf/*ngFor).
	// We indicate the editor has already been removed from DOM
	// so that destroy doesn"t call "remove" and we remove the editor
	// from tinymce.
	ngOnDestroy() {
		this.editor.removed = true;
		this.removeEditor();
	}

	private createEditor() {
		tinymce.baseURL = this.baseURL;
		let options: any = {
			selector: "#" + this.id,
			plugins: this.options.plugins,
			toolbar: this.options.toolbar,
			readonly: this.readonly ? 1 : 0,
			setup: (editor) => { this.editor = editor; this.bindEditor(); }
		};

		if (this.readonly) {
			options.toolbar = options.menubar = false;
		}
		tinymce.init(options);
	}

	private bindEditor() {
		this.editor.on("change keyup cut paste undo redo", () => {
			this.emitContentChange();
		});

		this.editor.on("blur", () => {
			this.zone.run(() => { this.blur.emit(true); return true; });
		});

		this.editor.on("focus", () => {
			this.zone.run(() => { this.focus.emit(true); });
		});
	}

	removeEditor() {
		// Hacks to avoid exceptions if the editor is destroyed
		// before it is thoroughly initialized 
		if (!this.editor.selection) {
			this.editor.selection = { destroy: () => { } };
			this.editor.selection.dom = {};
		}

		if (!this.editor.dom) {
			this.editor.dom = { destroy: () => { } };
		}

		this.editor.destroy();
		tinymce.remove(this.editor);
		this.editor = null;
	}

	private emitContentChange() {
		let event = { value: this.editor.getContent() };
		this.zone.run(() => {
			this.contentChange.emit(event);
		});
	}

	setContent(content: string) {
		this.initialValue = content;
		if (this.editor) {
			this.editor.setContent(content);
		}
	}
}
