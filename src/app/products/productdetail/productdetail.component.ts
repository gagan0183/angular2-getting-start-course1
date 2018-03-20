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
    let id = +this._route.snapshot.paramMap.get('id');
    console.log(id);
    this.pageTitle += `: ${id}`;
  }
}
