import { Component, Input } from '@angular/core';
import { Post } from '../../../models/post';

@Component({
    selector: 'app-post-view',
    templateUrl: './post-view.component.html',
    styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent {
    @Input() post: Post = null;


    constructor() { }

    get title() {
        return this.post.title;
    }

    get id() {
        return this.post._id;
    }

    get category() {
        return this.post.category;
    }

    get tags() {
        return this.post.tags;
    }

    get postContent() {
        return this.post.body;
    }
 

}
