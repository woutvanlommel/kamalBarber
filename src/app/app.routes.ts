import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Afspraak } from './afspraak/afspraak';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'afspraak', component: Afspraak},
];
