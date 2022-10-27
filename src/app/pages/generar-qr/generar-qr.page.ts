import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {

  constructor(private menuController : MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  async Generar() {
    const alert = await this.alertController.create({
      header: 'QR Generado',
      message: '<img src="assets/codigoQR.png" class="ion-padding">',
      buttons: ['OK'],
      mode:"ios",
    });

    await alert.present();
  }

  mostrarMenu(){
    this.menuController.enable(true, 'second')
    this.menuController.open('second');
  }


}
