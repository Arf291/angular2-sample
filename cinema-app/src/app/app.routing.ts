import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsComponent } from './films';
import { RankingComponent } from './ranking';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: FilmsComponent
  },
  {
    path: 'ranking',
    component: RankingComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
