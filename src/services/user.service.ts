import { User } from '../app/models/User';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    users: User[] = [];

    getAllUsers() {
        // return this.http.get('/api/users');
        return this.users;
    }

    getUserByUsername(username: string) {
        // return this.http.get('/api/users/username');
        return this.users.find(x => x.username === username);
    }

    createUser(user: User) {
        // return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());        
        this.users.push(user);
    }

    loginUser(username: string, password: string) {
        // TODO: Make call to server!
        let foundUser = this.users.find(user => user.username === username && user.password === password);
        console.log(foundUser);
        localStorage.setItem('loggedUser', JSON.stringify(foundUser));
    }

    logoutUser() {
        localStorage.removeItem('loggedUser');
    }
}

// JWT token 
/* private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    } */
