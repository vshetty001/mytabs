import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  allTabs:Tab[] = [
    new Tab("San Francisco Trip", ["Viraj", "Vivint", "Sanath"]),
    new Tab("Florida Trip", ["Naveen", "Rama", "Viraj"]),
    new Tab("Ongoing Rent", ["Mahika", "Miraya", "Sally"])
  ]

  constructor() { }
}

export class Tab {

  createdDate:Date; 

  constructor(public name:string, public users:string[]) {
    this.createdDate = new Date()
  }

}
