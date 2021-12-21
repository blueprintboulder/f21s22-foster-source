import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
];

export const landingRouting = RouterModule.forChild(routes);

@NgModule({
  declarations: [LandingPageComponent, AnnouncementComponent],
  imports: [CommonModule, landingRouting, ReactiveFormsModule, FormsModule],
  exports: [AnnouncementComponent],
})
export class LandingModule {}
