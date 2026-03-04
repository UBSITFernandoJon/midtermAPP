import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  imports: [],
  templateUrl: './property.html',
  styleUrl: './property.css',
})
export class Property { isButtonDisabled: boolean = false;

  // 🔹 Image bindings
  imageSource: string = 'https://m.media-amazon.com/images/M/MV5BMjE1ODY0NzE4N15BMl5BanBnXkFtZTcwMTY5Mzk0Mw@@._V1_FMjpg_UX1000_.jpg';
  imageAlt: string = 'Sample Image';
  imageWidth: number = 150;

  // 🔹 Link bindings
  linkUrl: string = 'https://ubaguio.edu/';

  // 🔹 Input binding
  inputPlaceholder: string = 'Enter your name here';

  // 🔹 Button click method
  onButtonClick(): void {
    alert('Button clicked!');
    this.isButtonDisabled = true; // disables after first click
  }
}
