import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'inputs',
    loadChildren: () => import('./pages/inputs/inputs.module').then( m => m.InputsPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./pages/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'escaneo-qr',
    loadChildren: () => import('./pages/escaneo-qr/escaneo-qr.module').then( m => m.EscaneoQrPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./pages/generar-qr/generar-qr.module').then( m => m.GenerarQrPageModule)
  },
  {
    path: 'tutorial-docente',
    loadChildren: () => import('./pages/tutorial-docente/tutorial-docente.module').then( m => m.TutorialDocentePageModule)
  },
  {
    path: 'restablecer-password',
    loadChildren: () => import('./pages/restablecer-password/restablecer-password.module').then( m => m.RestablecerPasswordPageModule)
  },
  {
    path: 'restablecer-password2',
    loadChildren: () => import('./pages/restablecer-password2/restablecer-password2.module').then( m => m.RestablecerPassword2PageModule)
  },
  {
    path: 'restablecer-password3',
    loadChildren: () => import('./pages/restablecer-password3/restablecer-password3.module').then( m => m.RestablecerPassword3PageModule)
  },
  {
    path: 'registro-docente',
    loadChildren: () => import('./pages/registro-docente/registro-docente.module').then( m => m.RegistroDocentePageModule)
  },
  {
    path: 'inicio-docente',
    loadChildren: () => import('./pages/inicio-docente/inicio-docente.module').then( m => m.InicioDocentePageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./pages/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
