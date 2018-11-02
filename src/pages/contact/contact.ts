import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../app/user'

import { UserService } from '../../app/user.service'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  user: User;
  event: any;
  constructor(public navCtrl: NavController, private userService: UserService) {
    this.user = {name: "William", tel: "311", email: "a2a@as.co", password: "123"};
    this.event = {title: "William", startTime: new Date(), endTime: new Date()};
  }

  addUser(name: string) {
    // this.userService.getUsers().subscribe(a => console.log(a));
    this.userService.createAccount(this.user).subscribe(a => console.log("ad" + JSON.stringify(a)));
    console.log("Prueba")
  }
  
  addEvent() {
    // this.userService.getUsers().subscribe(a => console.log(a));
    this.userService.createEvent(this.event).subscribe(a => console.log("ad" + JSON.stringify(a)));
    console.log("Prueba")
  }
}
