import { Component, OnInit } from '@angular/core';
// import { TweenLite } from 'gsap';
import { TweenLite, Draggable, TimelineMax, Linear, gsap } from 'gsap/all';

gsap.registerPlugin(TweenLite, Draggable, TimelineMax, Linear); 

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  picker = document.querySelector(".picker");
  cells = document.querySelectorAll(".cell");
  proxy = document.createElement("div");

  cellWidth = 250;
  numCells = this.cells.length;
  cellStep = 1 / this.numCells;
  wrapWidth = this.cellWidth * this.numCells;

  baseTl = new TimelineMax({ paused: true });

  animation = new TimelineMax({ repeat: -1, paused: true }).add(
    this.baseTl.tweenFromTo(1, 2)
  );
  i: any;

  draggable = new Draggable(this.proxy, {
    // allowContextMenu: true,
    type: "x",
    trigger: this.picker,
    throwProps: true,
    onDrag: this.updateProgress,
    onThrowUpdate: this.updateProgress,
    snap: {
      x: this.snapX
    },
    onThrowComplete: function () {
      console.log("onThrowComplete");
      //TODO: animation that inject selected card title
    }
  });
  constructor() { }

  ngOnInit(): void {

    TweenLite.defaultEase = Linear.easeNone;

    TweenLite.set(this.picker, {
      //perspective: 1100,
      width: this.wrapWidth - this.cellWidth
    });

    for (let i = 0; i < this.cells.length; i++) {
      this.i = i;
      this.initCell(this.cells[i], i);
    }


  }



  snapX(x) {
    return Math.round(x / this.cellWidth) * this.cellWidth;
  }

  updateProgress() {
    console.log(this.wrapWidth);
    // this.animation.progress(this.x / this.wrapWidth);
  }

  initCell(element, index) {
    TweenLite.set(element, {
      width: this.cellWidth,
      scale: 0.6,
      //rotationX: rotationX,
      x: -this.cellWidth
    });

    let tl = new TimelineMax({ repeat: 1 })
      .to(element, 1, { x: "+=" + this.wrapWidth /*, rotationX: -rotationX*/ }, 0)
      .to(
        element,
        this.cellStep,
        { color: "#009688", scale: 1, repeat: 1, yoyo: true },
        0.5 - this.cellStep
      );

    this.baseTl.add(tl, this.i * -this.cellStep);
  }





}
