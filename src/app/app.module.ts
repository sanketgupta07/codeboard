import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { RepositoryService } from './service/repository/repository.service';
import { OrganizationService } from './service/organization/organization.service';
import { Utils } from './utils/util.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { UserComponent } from './components/user/user.component';
import { UserService } from './service/user/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OrganizationComponent,
    RepositoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [
    Utils,
    OrganizationService,
    RepositoryService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
