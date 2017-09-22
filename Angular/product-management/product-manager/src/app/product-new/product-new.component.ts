import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '.././product.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  newProduct = {
    id:'',
    title:'',
    price:'',
    image:''
  }

  constructor(private _productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    console.log(formData);
    console.log(this.newProduct);
    this._productService.createNewProduct(this.newProduct);
    this.router.navigateByUrl("products");
  }
  
}
