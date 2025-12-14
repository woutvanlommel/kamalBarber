import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Afspraakitem {
  id: string;
  naam: string;
  email: string;
  telefoon: string;
  datum: string;
  tijd: string;
  dienst: string;
  opmerkingen: string;
}

@Component({
  selector: 'app-afspraak',
  imports: [CommonModule, FormsModule],
  templateUrl: './afspraak.html',
  styleUrl: './afspraak.css',
})
export class Afspraak implements OnInit {
  selectedDate: string = '';
  availableTimeSlots: string[] = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];
  
  formData = {
    naam: '',
    email: '',
    telefoon: '',
    datum: '',
    tijd: '',
    dienst: '',
    opmerkingen: ''
  };

  minDate: string = '';
  bookedSlots: { [key: string]: string[] } = {};
  showSuccessMessage = false;
  successMessage = '';

  ngOnInit() {
    // Zet minimum datum op vandaag
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
    
    // Voeg demo data toe als er nog geen afspraken zijn
    this.initializeDemoData();
    
    // Laad bestaande afspraken uit localStorage
    this.loadBookedSlots();
  }

  initializeDemoData() {
    const stored = localStorage.getItem('kamalBarberAfspraken');
    if (!stored) {
      // Maak wat demo afspraken voor verschillende data
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dayAfterTomorrow = new Date(today);
      dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

      const demoAfspraken: Afspraakitem[] = [
        {
          id: '1',
          naam: 'Jan Peeters',
          email: 'jan@example.be',
          telefoon: '+32 123 45 67 89',
          datum: today.toISOString().split('T')[0],
          tijd: '10:00',
          dienst: 'knipbeurt',
          opmerkingen: 'Demo afspraak'
        },
        {
          id: '2',
          naam: 'Sara De Vries',
          email: 'sara@example.be',
          telefoon: '+32 123 45 67 90',
          datum: today.toISOString().split('T')[0],
          tijd: '14:00',
          dienst: 'baard',
          opmerkingen: 'Demo afspraak'
        },
        {
          id: '3',
          naam: 'Mohamed Ali',
          email: 'mohamed@example.be',
          telefoon: '+32 123 45 67 91',
          datum: today.toISOString().split('T')[0],
          tijd: '16:30',
          dienst: 'knip-baard',
          opmerkingen: 'Demo afspraak'
        },
        {
          id: '4',
          naam: 'Tom Janssen',
          email: 'tom@example.be',
          telefoon: '+32 123 45 67 92',
          datum: tomorrow.toISOString().split('T')[0],
          tijd: '09:00',
          dienst: 'knipbeurt',
          opmerkingen: 'Demo afspraak'
        },
        {
          id: '5',
          naam: 'Lisa Vermeulen',
          email: 'lisa@example.be',
          telefoon: '+32 123 45 67 93',
          datum: tomorrow.toISOString().split('T')[0],
          tijd: '11:30',
          dienst: 'kind',
          opmerkingen: 'Demo afspraak'
        },
        {
          id: '6',
          naam: 'Kevin Claes',
          email: 'kevin@example.be',
          telefoon: '+32 123 45 67 94',
          datum: tomorrow.toISOString().split('T')[0],
          tijd: '15:00',
          dienst: 'scheren',
          opmerkingen: 'Demo afspraak'
        },
        {
          id: '7',
          naam: 'David Martinez',
          email: 'david@example.be',
          telefoon: '+32 123 45 67 95',
          datum: dayAfterTomorrow.toISOString().split('T')[0],
          tijd: '13:00',
          dienst: 'special',
          opmerkingen: 'Demo afspraak'
        }
      ];

      localStorage.setItem('kamalBarberAfspraken', JSON.stringify(demoAfspraken));
    }
  }

  loadBookedSlots() {
    const stored = localStorage.getItem('kamalBarberAfspraken');
    if (stored) {
      const afspraken: Afspraakitem[] = JSON.parse(stored);
      this.bookedSlots = {};
      afspraken.forEach(afspraak => {
        if (!this.bookedSlots[afspraak.datum]) {
          this.bookedSlots[afspraak.datum] = [];
        }
        this.bookedSlots[afspraak.datum].push(afspraak.tijd);
      });
    }
  }

  onDateChange() {
    this.formData.datum = this.selectedDate;
    this.formData.tijd = ''; // Reset tijd selectie
  }

  isTimeSlotAvailable(timeSlot: string): boolean {
    if (!this.selectedDate) return true;
    
    const date = new Date(this.selectedDate);
    const dayOfWeek = date.getDay();
    
    // Zondag (0) is gesloten
    if (dayOfWeek === 0) return false;
    
    // Zaterdag (6): alleen tot 17:00
    if (dayOfWeek === 6) {
      const [hours] = timeSlot.split(':');
      if (parseInt(hours) >= 17) return false;
    }
    
    // Check of tijdslot al geboekt is
    if (this.bookedSlots[this.selectedDate]) {
      return !this.bookedSlots[this.selectedDate].includes(timeSlot);
    }
    
    return true;
  }

  selectTimeSlot(timeSlot: string) {
    if (this.isTimeSlotAvailable(timeSlot)) {
      this.formData.tijd = timeSlot;
    }
  }

  onSubmit() {
    // Validatie
    if (!this.formData.naam || !this.formData.email || !this.formData.telefoon || 
        !this.formData.datum || !this.formData.tijd || !this.formData.dienst) {
      alert('Vul alle verplichte velden in.');
      return;
    }

    // Maak nieuwe afspraak
    const newAfspraak: Afspraakitem = {
      id: Date.now().toString(),
      ...this.formData
    };

    // Laad bestaande afspraken
    let afspraken: Afspraakitem[] = [];
    const stored = localStorage.getItem('kamalBarberAfspraken');
    if (stored) {
      afspraken = JSON.parse(stored);
    }

    // Voeg nieuwe afspraak toe
    afspraken.push(newAfspraak);
    localStorage.setItem('kamalBarberAfspraken', JSON.stringify(afspraken));

    // Update booked slots
    this.loadBookedSlots();

    // Toon succes bericht
    this.successMessage = `Uw afspraak is bevestigd voor ${this.formData.datum} om ${this.formData.tijd}!`;
    this.showSuccessMessage = true;

    // Reset formulier
    this.resetForm();

    // Verberg succes bericht na 5 seconden
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 5000);
  }

  resetForm() {
    this.formData = {
      naam: '',
      email: '',
      telefoon: '',
      datum: '',
      tijd: '',
      dienst: '',
      opmerkingen: ''
    };
    this.selectedDate = '';
  }

  getAvailableSlotsCount(): number {
    if (!this.selectedDate) return 0;
    return this.availableTimeSlots.filter(slot => this.isTimeSlotAvailable(slot)).length;
  }
}
