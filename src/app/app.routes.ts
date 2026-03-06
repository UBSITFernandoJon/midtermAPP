import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Navi } from './components/navi/navi';
import { Attribute } from './databindings/attribute/attribute';
import { Class } from './databindings/class/class';
import { EventComponent } from './databindings/event/event';
import { Interpolation } from './databindings/interpolation/interpolation';
import { Property } from './databindings/property/property';
import { Style } from './databindings/style/style';
import { TwoWay } from './databindings/two-way/two-way';
import { ProductsComponent } from './databindings/products/products';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'navi', component: Navi },
    { path: 'attribute', component: Attribute },
    { path: 'class', component: Class },
    { path: 'event', component: EventComponent },
    { path: 'interpolation', component: Interpolation },
    { path: 'property', component: Property },
    { path: 'style', component: Style },
    { path: 'two-way', component: TwoWay },
    { path: 'products', component: ProductsComponent}

];
