import { Component, OnInit  } from '@angular/core';
// import {NavController, Platform} from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EncuentraService } from 'src/app/services/Encuentra.service';
import { Observable } from 'rxjs';

interface Encuentra {
    id?: string,
    img: string,
    link: string,
    titulo: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    public empresas: any = [];

  constructor(
       private iab: InAppBrowser,
       private encuentraService: EncuentraService
      // public platform: Platform
  ) {
      // platform.ready().then(() => {
      //   let browser = this.iab.create('http://rds-empleos.hn/', 'blank', {zoom:'no', location:'no', hideurlbar:'no'});
      //   browser.show();
      // });
  }


  openBlank() {
      let browser = this.iab.create('http://rds-empleos.hn/', 'blank', {zoom:'no', location:'no', hideurlbar:'no'});
      browser.show();
  }
    openBlank_x(link){
        let browser = this.iab.create(link, 'blank', {zoom:'no', location:'no', hideurlbar:'no'});
        browser.show();
    }

    ngOnInit() {
      try {
          this.encuentraService.getEncuentra().subscribe(
              encontrado => {
                  encontrado.map(documento => {
                      const data: Encuentra = documento.payload.doc.data() as Encuentra;
                      this.empresas.push(data);
                  });
              }
          );
      }catch (e) {
          console.log('algo salió mal');
          this.empresas = [
              {
                  img:"../../assets/img/empleos.png",
                  titulo:"¿Buscas empleo?",
                  link:"https://empleos.hn/"
              },
              {
                  img:"../../assets/img/eventos.png",
                  titulo:"¿Que harás hoy?",
                  link:"https://rds-eventos.hn/"
              },
              {
                  img:"../../assets/img/becas.png",
                  titulo:"¿Seguir superándote?",
                  link:"https://rds-becas.hn/"
              },
              {
                  img:"../../assets/img/radio.png",
                  titulo:"Escucha la 88.9 FM",
                  link:"https://rdsradio.hn/"
              }
          ];
      }


    }
}
