import { UserComponent } from './components/user/user.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'org', children:
      [
        { path: '', component: OrganizationComponent }
      ]
  },
  {
    path: 'repo', children:
      [
        { path: '', component: RepositoryComponent }
      ]
  },
  {
    path: 'user', children:
      [
        { path: '', component: UserComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
