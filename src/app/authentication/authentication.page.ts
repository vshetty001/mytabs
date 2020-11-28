import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss']
})
export class AuthenticationPage implements OnInit {

  email: string
  password: string

  constructor(
    private router: Router, 
    private authSrv: AuthenticationService,
    private  alertController: AlertController
    ) { }

  ngOnInit() {
  }

  OnRegisterUser() {
    this.router.navigateByUrl("/authentication/register")
  }

  OnResetPassword() {
    this.router.navigateByUrl("/authentication/reset-pswd")
  }

  OnLogin(f: NgForm) {

    try {

      console.log(f);

      // do login here 
      this.authSrv.authenticate(this.email, this.password)

      this.router.navigateByUrl("/tabs")
    }
    catch (e) {
      console.log("Invalid Credentials. try again ! ");
      this.presentAlert()
    }

  }

  presentAlert() {
    this.alertController.create({
      header: 'Invalid credentials',
      message: 'Please enter correct email and password',
      buttons: ['OK']
    }).then(alertElem => {
      alertElem.present()
    })

  }

}
