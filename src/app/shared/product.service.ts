import { Injectable } from '@angular/core';
import { IProduct } from '../products/product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProductService {
    productUrl: string = '../../api/products/product.json';

    constructor(private _http: HttpClient) {
    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this.productUrl)
                .do(data => console.log(JSON.stringify(data)))
                .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        return Observable.throw(err.message);
    }
}
