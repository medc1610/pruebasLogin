import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    initialNavigation: !isIframe ? 'enabledBlocking' : 'enabledNonBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
