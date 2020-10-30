import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms'
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { DetailComponent } from './detail/detail.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes : Routes =  [
  {path: 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent},
  {path: 'appareils/:id', canActivate: [AuthGuardService], component: DetailComponent},
  {path: 'edit', canActivate: [AuthGuardService], component: EditAppareilComponent},
  {path: 'users',  component: UserListComponent},
  {path: 'addUser', component: NewUserComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: AppareilViewComponent},
  {path: 'notFound', component: FourOhFourComponent},
  {path: '**', redirectTo:'/notFound'}
]

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    DetailComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService, 
    AuthService, 
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
