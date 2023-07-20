import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidenavComponent } from './left-sidenav/left-sidenav.component';
import { RightSidenavComponent } from './right-sidenav/right-sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { QuotemanagementComponent } from './quotemanagement/quotemanagement.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { ChartComponent } from './chart/chart.component';
import{HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component'


@NgModule({
  declarations: [
    LeftSidenavComponent,
    RightSidenavComponent,
    FooterComponent,
    DashboardComponent,
    ContentComponent,
    HeaderComponent,
    QuotemanagementComponent,
    UsermanagementComponent,
    ChartComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    DashboardComponent,
    FooterComponent
]
})
export class DashboardModule { }
