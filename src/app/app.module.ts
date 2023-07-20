import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsermanagementComponent } from './dashboard/usermanagement/usermanagement.component';
import { QuotemanagementComponent } from './dashboard/quotemanagement/quotemanagement.component';
import { ContentComponent } from './dashboard/content/content.component';
import { ChartComponent } from './dashboard/chart/chart.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { RecoverPasswordComponent } from './authentication/recover-password/recover-password.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AuthGuard } from './authentication/services/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, canActivateChild:[AuthGuard],
    children: [
      { path: 'home', component: ContentComponent },
      { path: 'usermanagement', component: UsermanagementComponent },
      { path: 'quotemanagement', component: QuotemanagementComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'charts', component: ChartComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  {
    path: 'authentication', component: AuthenticationComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'recoverPassword', component: RecoverPasswordComponent },
      { path: 'forgotPassword', component: ForgotPasswordComponent },
      {path:'resetPassword',component:RecoverPasswordComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: 'authentication/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'authentication/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    DashboardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DashboardModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
