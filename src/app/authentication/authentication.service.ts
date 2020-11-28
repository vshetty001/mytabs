import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // needs to remove later 
  allUsers:User[] = [
    new User("Viraj", "shetty_viraj@yahoo.com", "urxlnc")
  ] 

  private _user:User; 

  constructor() { }

  isLoggedIn() : boolean {

    // Faking it 
    return true;
  }

  registerUser(name:string, email:string, password:string) : void {

    // needs to change implementation
    this.allUsers.push(new User(name, email, password))
  }

  authenticate(email:string, password:string) : void {

    console.log(`Authenticating ${email} with ${password}...`);
    
    this._user = this.allUsers.find(u => u.email === email && u.password === password)
    if (!this._user) {
      throw new Error("Invalid credentials")
    }
  }
}

/**
 * Represents a user in the system 
 */
export class User {
  constructor(readonly name:string, readonly email:string, readonly password:string ) {}
}
