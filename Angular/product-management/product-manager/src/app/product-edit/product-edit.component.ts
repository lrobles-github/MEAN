import { Component, OnInit } from '@angular/core';
import { ProductService } from '.././product.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  editedProduct: Product;

  constructor(
    private _productService: ProductService, 
    private router: Router, 
    private _route: ActivatedRoute,) { 
    console.log('in constructor at prod-edit.component');
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      });
  }

  ngOnInit() {
    this._route.paramMap
    .switchMap(params =>
      this._productService.getProduct(params.get('id'))
    )
    .subscribe(product => this.editedProduct = product)

  }

  onSubmit(formData) {
    console.log(formData);
    console.log(this.editedProduct);
    this._productService.createNewProduct(this.editedProduct);
    this.router.navigateByUrl("products");
  }

}
