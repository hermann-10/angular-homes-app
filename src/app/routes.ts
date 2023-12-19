import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeDetailsComponent } from './components/home-details/home-details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'home-details/:id',
    component: HomeDetailsComponent,
    title: 'Home Details Page',
  },
];

export default routeConfig;