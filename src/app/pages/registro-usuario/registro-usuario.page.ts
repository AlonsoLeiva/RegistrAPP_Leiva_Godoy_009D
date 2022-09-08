import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {

  constructor(private menuController : MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }



  estudiante = {
    nombre:'',
    apellido:'',
    email: '',
    password:'',
    password2:'',
    sexo:'',
    carrera:'',
    sede:'',
  }

  onSubmit(){
    console.log('submit');
    console.log(this.estudiante);
  }

}
