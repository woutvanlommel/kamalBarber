import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Dienst {
  icon: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
}

@Component({
  selector: 'app-diensten',
  imports: [CommonModule, RouterLink],
  templateUrl: './diensten.html',
  styleUrl: './diensten.css',
})
export class Diensten {
  diensten: Dienst[] = [
    {
      icon: '✂️',
      title: 'Knipbeurt',
      description: 'Professionele herenkapsels op maat, van klassiek tot modern. Onze ervaren barbers zorgen voor een strakke afwerking.',
      price: '€20',
      duration: '30 min',
      features: ['Wassen', 'Knippen', 'Stylen', 'Gratis advies']
    },
    {
      icon: '🧔',
      title: 'Baard Trimmen',
      description: 'Perfecte baard verzorging met strakke contouren en symmetrische trims afgestemd op uw gezichtsvorm.',
      price: '€15',
      duration: '20 min',
      features: ['Trimmen', 'Contouren', 'Olie behandeling', 'Styling tips']
    },
    {
      icon: '💈',
      title: 'Knip + Baard',
      description: 'Compleet verzorgd in één sessie. De perfecte combinatie voor een totale makeover.',
      price: '€30',
      duration: '50 min',
      features: ['Volledige knipbeurt', 'Baard trimmen', 'Hot towel', 'Premium producten']
    },
    {
      icon: '🪒',
      title: 'Traditioneel Scheren',
      description: 'Luxe scheerbeurt met warme handdoek en premium scheerproducten voor een gladde finish.',
      price: '€18',
      duration: '25 min',
      features: ['Hot towel', 'Traditioneel scheermes', 'Aftershave', 'Gezichtsmassage']
    },
    {
      icon: '👶',
      title: 'Kinderknip',
      description: 'Kindvriendelijke knipbeurten in een ontspannen sfeer. Ook voor de eerste knipbeurt!',
      price: '€15',
      duration: '20 min',
      features: ['Geduldig en vriendelijk', 'Snelle service', 'Leuke sfeer', 'Voor alle leeftijden']
    },
    {
      icon: '✨',
      title: 'Speciale Behandeling',
      description: 'Premium pakket met gezichtsverzorging, massage en volledige styling voor de perfecte look.',
      price: '€35',
      duration: '60 min',
      features: ['Volledige behandeling', 'Gezichtsverzorging', 'Massage', 'Luxe producten']
    }
  ];
}
