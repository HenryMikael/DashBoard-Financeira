import { Component } from '@angular/core';
import { Productscomponent } from '../../components/productscomponent/productscomponent';

@Component({
  selector: 'app-products',
  imports: [Productscomponent],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {}
