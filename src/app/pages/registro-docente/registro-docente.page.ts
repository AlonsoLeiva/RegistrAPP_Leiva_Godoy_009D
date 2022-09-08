import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro-docente',
  templateUrl: './registro-docente.page.html',
  styleUrls: ['./registro-docente.page.scss'],
})
export class RegistroDocentePage implements OnInit {

  constructor(private menuController : MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  docente = {
    nombre:'',
    apellido:'',
    email: '',
    password:'',
    password2:'',
    sexo:'',
    facultad:'',
    sede:'',
    titulo:'',
  }

  onSubmit(){
    console.log('submit');
    console.log(this.docente);
  }
}
