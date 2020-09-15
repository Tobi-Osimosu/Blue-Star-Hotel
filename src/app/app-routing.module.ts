import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurRoomsComponent } from './our-rooms/our-rooms.component';
import { OurFacilitiesComponent } from './our-facilities/our-facilities.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent, 
    data: { animation: "home" },
  },
  {
    path: 'our-rooms',
    component: OurRoomsComponent,
    data: { animation: "our-rooms" },
  },
  {
    path: 'our-facilities',
    component: OurFacilitiesComponent,
    data: { animation: "our-facilities" },
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: { animation: "contact-us" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
