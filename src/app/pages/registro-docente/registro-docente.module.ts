import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDocentePageRoutingModule } from './registro-docente-routing.module';

import { RegistroDocentePage } from './registro-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDocentePageRoutingModule
  ],
  declarations: [RegistroDocentePage]
})
export class RegistroDocentePageModule {}
