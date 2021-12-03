import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicUserPageComponentComponent } from './public-user-page-component/public-user-page-component.component';

const routes: Routes = [
  {
    path: ':id',
    component: PublicUserPageComponentComponent,
  },
  {
    path: '',
    component: PublicUserPageComponentComponent,
  },
];

export const userRouting = RouterModule.forChild(routes);

@NgModule({
  declarations: [PublicUserPageComponentComponent],
  imports: [CommonModule, userRouting],
})
export class UserModule {}
