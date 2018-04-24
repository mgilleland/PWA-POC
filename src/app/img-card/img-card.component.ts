import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };
  
  public src: string;
  public getButton: Button = {
    text: 'Give me another cat',
    color: 'primary',
    disabled: false
  };
  constructor() { }

  ngOnInit() {
    this.generateSrc();
    if (!navigator.onLine) {
      this.getButton.text = 'Sorry, you\'re offline';
      this.getButton.disabled = true;
    }
  }

  generateSrc(): void {
    this.src = this.image.api + this.image.message +
      '?size=' + this.image.fontsize + '&ts=' + Date.now();
  }

  isOffline(): boolean {
    return this.getButton.disabled;
  }
}

class CatImage {
  message: string;
  api: string;
  fontsize: number;
}

class Button { 
  text: string;
  disabled: boolean;
  color: string;
}