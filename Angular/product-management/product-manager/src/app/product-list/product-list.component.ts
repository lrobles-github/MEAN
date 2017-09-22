import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';
import { ProductService } from '.././product.service'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  @Input() products;
  @Output() deleteProductEvent = new EventEmitter();

  // products = [];

  constructor(private _productService: ProductService) { 
    this.products = _productService.getAllProducts();
  }
  
  ngOnInit() {
  }

  editProduct(product) {
    console.log('editProduct() from product-list.component called');
    console.log('editing', product);
    this._productService.editProduct(product);
  }

  deleteProduct(product) {
    console.log('To be deleted:', product.title);
    console.log("deleteProduct() from product-list.component called");
    // this.deleteProductEvent.emit(product);   
    this._productService.deleteProduct(product);
  }
}
