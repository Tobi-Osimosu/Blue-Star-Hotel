import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeLandingComponent } from './home/home-landing/home-landing.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeTestimonialsComponent } from './home/home-testimonials/home-testimonials.component';
import { HomeSubscribeComponent } from './home/home-subscribe/home-subscribe.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OurRoomsComponent } from './our-rooms/our-rooms.component';
import { OurRoomsLandingComponent } from './our-rooms/our-rooms-landing/our-rooms-landing.component';
import { RoomsComponent } from './our-rooms/rooms/rooms.component';
import { OurFacilitiesComponent } from './our-facilities/our-facilities.component';
import { FacilitiesComponent } from './our-facilities/facilities/facilities.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsLandingComponent } from './contact-us/contact-us-landing/contact-us-landing.component';
import { ContactComponent } from './contact-us/contact/contact.component';
import { OurFacilitiesLandingComponent } from './our-facilities/our-facilities-landing/our-facilities-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeLandingComponent,
    HomeAboutComponent,
    HomeTestimonialsComponent,
    HomeSubscribeComponent,
    HeaderComponent,
    FooterComponent,
    OurRoomsComponent,
    OurRoomsLandingComponent,
    RoomsComponent,
    OurFacilitiesComponent,
    FacilitiesComponent,
    ContactUsComponent,
    ContactUsLandingComponent,
    ContactComponent,
    OurFacilitiesLandingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SwiperModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [{ provide: 'windowObject', useValue: window }],
  bootstrap: [AppComponent],
})
export class AppModule {}
