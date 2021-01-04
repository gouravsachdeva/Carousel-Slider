import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NavbarComponent } from './common/navbar/navbar.component';
import { PrevArrowComponent } from './common/prev-arrow/prev-arrow.component';
import { NextArrowComponent } from './common/next-arrow/next-arrow.component';
import { SearchComponent } from './common/search/search.component';
import { CarouselComponent } from './common/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrevArrowComponent,
    NextArrowComponent,
    SearchComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
