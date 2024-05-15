import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg
  }

  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault = '';

  constructor() {

  }

  ngOnInit(): void {

  }

  imgError(){
    this.img = this.imgDefault;
  }

 imgLoaded(){
  this.loaded.emit(this.img)
 }

}
