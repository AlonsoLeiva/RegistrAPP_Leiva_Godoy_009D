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
      icon: 'qr-code-outline',
      name: 'Escaneo QR',
      redirecTo: '/escaneo-qr'
    },
    { 
      icon: 'book-outline',
      name: 'Tutorial',
      redirecTo: '/tutorial'
    },
    { 
      icon: 'calendar-outline',
      name: 'Feriados',
      redirecTo: '/feriados'
    },
    { 
      icon: 'person-circle-outline',
      name: 'Perfil',
      redirecTo: '/perfil-usuario'
    },
  ];
  
  componentes2 : Componente[] = [
    { 
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio-docente'
    },
    { 
      icon: 'qr-code-outline',
      name: 'Generar QR',
      redirecTo: '/generar-qr'
    },
    { 
      icon: 'book-outline',
      name: 'Tutorial',
      redirecTo: '/tutorial-docente'
    },
    { 
      icon: 'calendar-number-outline',
      name: 'Feriados',
      redirecTo: '/feriados-docente'
    },
    { 
      icon: 'clipboard-outline',
      name: 'Asistencias',
      redirecTo: '/asistencia-alumnos'
    },
    { 
      icon: 'person-circle-outline',
      name: 'Perfil',
      redirecTo: '/perfil-docente'
    }
  ];



}
