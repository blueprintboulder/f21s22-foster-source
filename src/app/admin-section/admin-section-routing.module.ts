import { StaffAccountRequestsComponent } from './staff-account-requests/staff-account-requests.component';
import { UserActionTableComponent } from './user-action-table/user-action-table.component';
import { BlacklistTableComponent } from './blacklist-table/blacklist-table.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { BugReportsComponent } from './bug-reports/bug-reports.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminGuard } from '../guards/admin/admin.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: '',
        component: UserActionTableComponent,
      },
      {
        path: 'blacklist',
        component: BlacklistTableComponent,
      },
      {
        path: 'announcements',
        component: AnnouncementsComponent,
      },
      {
        path: 'staff-requests',
        component: StaffAccountRequestsComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'bug-reports',
        component: BugReportsComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSectionRoutingModule {}
