export class Comment {
	content: string;
    author: string;
    postDate: number;
    likedBy: string[];
    dislikedBy: string[];

    constructor(
            content: string, 
    		author: string, 
    		postDate: number, 
    		likedBy: string[], 
    		dislikedBy: string[]) {
    	this.content = content;
    	this.author = author;
    	this.postDate = postDate;
    	this.likedBy = likedBy;
    	this.dislikedBy = dislikedBy;
    }
}