import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { InputFormComponent } from './pages/input-form/input-form.component';

import { AuthService } from './services/auth.service';
import { UserScoreService } from './services/user-scores.service';

import { InitAuthGuardService } from './services/guards/init-auth-guard.service';
import { RequireAnonGuardService } from './services/guards/require-anon-guard.service';
import { RequireUserGuardService } from './services/guards/require-user-guard.service';
import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',   component: HomePageComponent, canActivate: [InitAuthGuardService] },
  { path: 'auth/login',  component: LoginPageComponent, canActivate: [RequireAnonGuardService] },
  { path: 'auth/signup', component: SignupPageComponent, canActivate: [RequireAnonGuardService] },
  { path: 'user-info/input-form', component:InputFormComponent, canActivate: [RequireUserGuardService]},
  { path: 'user-info/profile', component:ProfileComponent, canActivate: [RequireUserGuardService]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    InputFormComponent,
    UserStatsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    UserScoreService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
