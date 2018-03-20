import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    console.log(id);
    this.pageTitle += `: ${id}`;
    this.product = {
        'productId': 8,
        'productName': 'Saw',
        'productCode': 'TBX-0022',
        'releaseDate': 'May 15, 2016',
        'description': '15-inch steel blade hand saw',
        'price': 11.55,
        'starRating': 3.7,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
    };
  }
}
