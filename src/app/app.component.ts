import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { UserService } from './user.service'

import { User } from './user'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, private userService: UserService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userService.createAccount({ name, email: "a@s.co", tel: "311", password: "asd" } as User)
      .subscribe(user => {
        console.log(user);
      });
  }
}
