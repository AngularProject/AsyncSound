import { Comment } from './Comment';

export class Playlist {
    title: string;
    creator: string;
    createdOn: number;
    songs: string[];
    users: string[];
    voteUp: string[];
    voteDown: string[];
    comments: Comment[];

    constructor(
            title: string,
            creator: string,
            createdOn: number,
            songs: string[],
            users: string[],
            voteUp: string[],
            voteDown: string[],
            comments: Comment[]) {
        this.title = title;
        this.creator = creator;
        this.createdOn = createdOn;
        this.songs = songs;
        this.users = users;
        this.voteUp = voteUp;
        this.voteDown = voteDown;
        this.comments = comments;
    }
}
