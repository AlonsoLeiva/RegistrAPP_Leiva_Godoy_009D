import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [
    { 
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    { 
      icon: 'home-outline',
      name: 'Inicio Docente',
      redirecTo: '/inicio-docente'
    },
    { 
      icon: 'qr-code-outline',
      name: 'Escaneo QR',
      redirecTo: '/escaneo-qr'
    },
    { 
      icon: 'qr-code-outline',
      name: 'Generar QR',
      redirecTo: '/generar-qr'
    },
    { 
      icon: 'book-outline',
      name: 'Tutorial',
      redirecTo: '/tutorial'
    },
    { 
      icon: 'book-outline',
      name: 'Tutorial Docente',
      redirecTo: '/tutorial-docente'
    },
    { 
      icon: 'person-circle-outline',
      name: 'Perfil',
      redirecTo: '/perfil-usuario'
    },
  ];
  



}
