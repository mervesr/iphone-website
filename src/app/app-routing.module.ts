import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessorizesComponent } from './accessorizes/accessorizes.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { IphoneComponent } from './iphone/iphone.component';
import { CardComponent } from './shared/card/card.component';
import { HeaderComponent } from './shared/layout/header/header.component';

const routes: Routes = [
  {
    path: 'app-header',
    component: HeaderComponent,
  },
  {
    path: 'iphone',
    component: IphoneComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
  },
  {
    path: 'accessorizes',
    component: AccessorizesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
