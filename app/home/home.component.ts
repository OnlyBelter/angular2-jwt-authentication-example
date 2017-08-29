import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    // users: User[] = [];
    private user: string;

    constructor(private userService: UserService) { }

    ngOnInit() {
        // get users from secure api end point
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.user = currentUser.username;
        // this.userService.getUsers()
        //     .subscribe(users => {
        //         this.users = users;
        //     });
    }

}