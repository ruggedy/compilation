export interface Post {
	_id?: string;
	title: string;
	body: string;
	mainPicture: string;
	featured: boolean;
	category: string,
	tags: string[],
	createdAt?: string

}