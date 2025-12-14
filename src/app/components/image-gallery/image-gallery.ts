import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

@Component({
  selector: 'app-image-gallery',
  imports: [CommonModule],
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.css',
})
export class ImageGallery {
  images: GalleryImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600',
      alt: 'Moderne herenkapper',
      category: 'Knipbeurt'
    },
    {
      url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600',
      alt: 'Baard trimmen',
      category: 'Baard'
    },
    {
      url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600',
      alt: 'Klassiek scheren',
      category: 'Scheren'
    },
    {
      url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600',
      alt: 'Barbershop interieur',
      category: 'Sfeer'
    },
    {
      url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600',
      alt: 'Professionele styling',
      category: 'Styling'
    },
    {
      url: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=600',
      alt: 'Baardverzorging',
      category: 'Baard'
    },
    {
      url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600',
      alt: 'Modern kapsel',
      category: 'Knipbeurt'
    },
    {
      url: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=600',
      alt: 'Barbershop tools',
      category: 'Sfeer'
    }
  ];

  selectedCategory: string = 'Alle';
  
  get categories(): string[] {
    const cats = ['Alle', ...new Set(this.images.map(img => img.category))];
    return cats;
  }

  get filteredImages(): GalleryImage[] {
    if (this.selectedCategory === 'Alle') {
      return this.images;
    }
    return this.images.filter(img => img.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
