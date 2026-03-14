import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from './page/dashboard/dashboard';
import { Products } from './page/products/products';
import { Statistics } from './page/statistics/statistics';
import { Coupens } from './page/coupens/coupens';
import { Pages } from './page/pages/pages';
import { Media } from './page/media/media';
import { Settings } from './page/settings/settings';

export const routes: Routes = [

    {path:'', redirectTo: 'dashboard', pathMatch: 'full' },
    {path:'dashboard', component: Dashboard },  
    {path:'products', component: Products},  
    {path:'statistics', component: Statistics},  
    {path:'coupens', component: Coupens},  
    {path:'pages', component: Pages},  
    {path:'media', component: Media},
    {path:'settings', component: Settings}
];