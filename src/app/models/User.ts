export class User {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    roles: any;

    constructor(username: string, firstName: string, lastName: string, password: string){
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.roles = [];
    }
}
