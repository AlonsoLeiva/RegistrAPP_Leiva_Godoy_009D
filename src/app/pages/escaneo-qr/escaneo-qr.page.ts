import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-escaneo-qr',
  templateUrl: './escaneo-qr.page.html',
  styleUrls: ['./escaneo-qr.page.scss'],
})
export class EscaneoQrPage implements OnInit {

  constructor(private alertController: AlertController,
              private menuController : MenuController) { }

  ngOnInit() {
  }

  async Escaneo() {
    const alert = await this.alertController.create({
      header: 'Asistencia confirmada',
      message: 'Escaneado correctamente',
      buttons: ['OK'],
      mode:"ios",
    });

    await alert.present();
  }

  mostrarMenu(){
    this.menuController.enable(true, 'first')
    this.menuController.open('first');
  }

}
