import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Product } from './product-list/product';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {

  products = [ 
    new Product(1, 'Clean Architecture', 99,'https://images-na.ssl-images-amazon.com/images/I/51J%2BVqSEz1L._SX382_BO1,204,203,200_.jpg'),
    new Product(2, 'Weapons of Math Destruction', 59, 'https://images-na.ssl-images-amazon.com/images/I/51pxbIv3v9L._SX322_BO1,204,203,200_.jpg'),
    new Product(3, 'Python Machine Learning', 34, 'https://images-na.ssl-images-amazon.com/images/I/41wDUrTO34L._SX404_BO1,204,203,200_.jpg')
  ];

  constructor(private _http: Http) { }

  getAllProducts() {
    return this.products;
  }

  createNewProduct(product) {
    this.products.push(product);
    this.getAllProducts;
  }

  deleteProduct(product) {
    console.log('deleteProduct() from product.service called')
    console.log('deleting ', product);
    this.products.splice(this.products.indexOf(product), 1);
  }

  editProduct(product) {
    console.log('editProduct() from product.service called, editing: ', product.title);
    let productFoundAtIndex = this.products.indexOf(product);
    console.log('product found at index ', productFoundAtIndex); 
    this.products[productFoundAtIndex].title = product.title;
    this.products[productFoundAtIndex].price = product.price;
    this.products[productFoundAtIndex].image = product.image;
    console.log('edits made:', this.products[productFoundAtIndex])
  }


  getProduct(id: string): Observable<Product> {
    return new Observable(subscriber => {
      const productFound = this.products.find(product => product._id === parseInt(id, 10));
      if (productFound) {
        return subscriber.next(productFound);
      }
      subscriber.error(new Error(`Product not found, id ${ id }`));
    });
  }

}


// Sample from the Coding Dojo Platform:
// ---------------------------------------
// retrieveTasks(): Observable<Task[]> {
//   return this._http.get(TaskService.base)
//     .map(response => response.json());
// }
// retrieveTask(id: string): Observable<Task> {
//   return this._http.get(`${ TaskService.base }/${ id }`)
//     .map(response => response.json());
// }