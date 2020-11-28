import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Tab, TabsService } from './tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
 
  tabs:Tab[] = [] 

  constructor(private tabSrv:TabsService, private sheetCtlr:ActionSheetController) { }

  ngOnInit() {
    this.tabs = this.tabSrv.allTabs; 
  }


  async presentActionSheet() {
    const actionSheet = await this.sheetCtlr.create({
      header: 'Choose an option',
      buttons: [ {
        text: 'Show Tab Items',
        icon: 'eye-outline',
        handler: () => {
          console.log('Show the tab items');
        }
      }, {
        text: 'Edit Tab Properties',
        icon: 'create-outline',
        handler: () => {
          console.log('Edit the tab properties');
        }
      }, {
        text: 'Settle Tab',
        icon: 'receipt-outline',
        handler: () => {
          console.log('Settle the tab');
        }
      }, {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
