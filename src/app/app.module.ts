import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrganizationComponent } from './organization/organization/organization.component';
import { MaterialModule } from './shared/material.module';
import { CreateOrganizationsComponent } from '/home/abhinesh/Documents/angular5/p&a applications/hostels/organizations/src/app/organization/create-organizations/create-organizations.component';
import { NavbarComponent } from '/home/abhinesh/Documents/angular5/p&a applications/hostels/organizations/src/app/organization/navbar/navbar.component';
import { AdminDetailsComponent } from './organization/admin-details/admin-details.component';
import { UserDetailsComponent } from './organization/user-details/user-details.component';
import { HomeComponent } from './organization/home/home.component';
import { AboutUsComponent } from './organization/about-us/about-us.component';
import { ContactUsComponent } from './organization/contact-us/contact-us.component';
import { ServicesComponent } from './organization/services/services.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ClientUsersComponent } from './client-user/client-users/client-users.component';
import { ClientsNavComponent } from '/home/abhinesh/Documents/angular5/p&a applications/hostels/organizations/src/app/client-user/clients-nav/clients-nav.component';
import { UsersService } from './users.service';

import {HttpClientModule} from '@angular/common/http';
import { BodysHostelComponent } from './client-user/bodys-hostel/bodys-hostel.component';
import { GirlsHostelComponent } from './client-user/girls-hostel/girls-hostel.component';
import { MatDialogModule } from '@angular/material';



const routes: Routes = [
  
    
      { path: 'organization', component: OrganizationComponent },
      { path: 'adminDetails', component: AdminDetailsComponent },
      { path: 'userDetails', component: UserDetailsComponent },


      {path:'home',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'service',component:ServicesComponent},
  {path:'contact-us',component:ContactUsComponent},
 
    // {path:'clientsUsers',component:ClientUsersComponent},

    {path:'boysHostels',component:BodysHostelComponent},
    // {path:'clientsUsers',component:ClientUsersComponent}
]
  

@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    CreateOrganizationsComponent,
    NavbarComponent,
    AdminDetailsComponent,
    UserDetailsComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactUsComponent,
    ClientUsersComponent,
    ClientsNavComponent,
    BodysHostelComponent,
    GirlsHostelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  RouterModule.forRoot(routes),
  MatFormFieldModule,
  HttpClientModule,
  MatDialogModule
  ],
  entryComponents:[CreateOrganizationsComponent,ClientUsersComponent],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
