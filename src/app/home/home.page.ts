import { Component } from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser, public platform: Platform) {
      platform.ready().then(() => {
        let browser = this.iab.create('http://rds-empleos.hn/', 'blank', {zoom:'no', location:'no', hideurlbar:'no'});
        browser.show();
      });
  }


  openBlank(){
      this.iab.create('http://rds-empleos.hn/', '_blank', 'hideurlbar=yes');
  }

}
