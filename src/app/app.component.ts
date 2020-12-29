import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousel';

  slides = ["Mobile internet", "Home internet", "Get a device", "Add a phone-line", "Upgrade", "Plan limits"];

  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "nextArrow": ".next-arrow",
    prevArrow: ".prev-arrow",
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    autoplay: false,
    dragrable: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
