import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-docente',
  templateUrl: './inicio-docente.page.html',
  styleUrls: ['./inicio-docente.page.scss'],
})
export class InicioDocentePage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
}
