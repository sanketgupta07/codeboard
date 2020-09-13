import { UserComponent } from './components/user/user.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { URL } from './utils/url';


const appRoutes: Routes = [
  {
    path: URL.ORG, children:
      [
        { path: '', component: OrganizationComponent }
      ]
  },
  {
    path: URL.REPO, children:
      [
        { path: '', component: RepositoryComponent }
      ]
  },
  {
    path: URL.USER, children:
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
