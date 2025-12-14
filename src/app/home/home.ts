import { Component } from '@angular/core';
import { Hero } from '../components/hero/hero';
import { Diensten } from '../components/diensten/diensten';
import { ImageGallery } from '../components/image-gallery/image-gallery';

@Component({
  selector: 'app-home',
  imports: [Hero, Diensten, ImageGallery],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
