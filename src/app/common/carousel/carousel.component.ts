import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides = ['Mobile internet', 'Home internet', 'Get a device', 'Add a phone-line', 'Upgrade', 'Plan limits'];

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: '.next-arrow',
    prevArrow: '.prev-arrow',
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: 0,
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

  constructor() { }

  ngOnInit(): void {
  }

  slickInit(e: any): void {
    console.log('slick initialized');
  }

  breakpoint(e: any): void {
    console.log('breakpoint');
  }

  afterChange(e: any): void {
    console.log('afterChange');
  }

  beforeChange(e: any): void {
    console.log('beforeChange');
  }
}
