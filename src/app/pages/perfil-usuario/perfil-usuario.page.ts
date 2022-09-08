import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  constructor(private alertController: AlertController,
              private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async CerrarSesion() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Has cerrado sesión correctamente',
      buttons: ['OK'],
      mode:"ios",
    });

    await alert.present();
  }
}
