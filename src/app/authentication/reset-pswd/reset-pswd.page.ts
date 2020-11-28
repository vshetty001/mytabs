import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reset-pswd',
  templateUrl: './reset-pswd.page.html',
  styleUrls: ['./reset-pswd.page.scss'],
})
export class ResetPswdPage implements OnInit {

  constructor(private router:Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onResetPassword() {
    this.navCtrl.pop();
  }

}
