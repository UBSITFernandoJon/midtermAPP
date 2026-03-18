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
import { ProductsList } from './databindings/products/products-list/products-list';
import { ProductDetails } from './databindings/products/product-details/product-details';
import { SuppliersListComponent } from './supplier-list/supplier-list';
import { SupplierDetailsComponent } from './supplier-details/supplier-details';

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
    { path: 'products', component: ProductsComponent},
    { path: 'PRODUCTS',component: ProductsList,children: [{
          path: ':id',
          children: [
            { path: 'Details', component: ProductDetails }
          ]
        }
      ]
    },
  { path: 'product-list', component: ProductsList},
  { path: 'suppliers', component: SuppliersListComponent },
  { path: 'suppliers/:id', component: SupplierDetailsComponent },
  { path: '', redirectTo: 'suppliers', pathMatch: 'full' },
  { path: '**', redirectTo: '/Home' }

];
