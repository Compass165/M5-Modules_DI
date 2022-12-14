import {Component, OnInit} from '@angular/core';
import {ListImage} from "../model/list-image";

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit{

  // @ts-ignore
  listImg: ListImage;

  // @ts-ignore
  component;

  // @ts-ignore
  currentImg;

  activeIndex = 0;

  constructor() {
    this.listImg = new ListImage;
  }

  ngOnInit() {
    this.component = this.listImg.listImage;
    this.currentImg = this.component[this.activeIndex];
  }

  previous() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
    this.currentImg = this.component[this.activeIndex];
  }

  next() {
    if (this.activeIndex < this.listImg.getLength() - 1) {
      this.activeIndex++;
    }
    this.currentImg = this.component[this.activeIndex];
  }

}
