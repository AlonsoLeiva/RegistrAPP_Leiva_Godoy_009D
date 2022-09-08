import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  constructor(private menuController : MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  iniciosesion={
    tipo:'',
    correo:'',
    password:'',
    
  }

  onSubmit(){
    console.log('submit');
    console.log(this.iniciosesion);
  }

}
