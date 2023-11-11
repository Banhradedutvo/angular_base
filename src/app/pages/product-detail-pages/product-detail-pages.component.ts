import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { IProduct } from 'src/app/interfaces/product';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-product-detail-pages',
  templateUrl: './product-detail-pages.component.html',
  styleUrls: ['./product-detail-pages.component.css'],
  providers: [NgIf],
})
export class ProductDetailPagesComponent implements OnInit {
  productId !:string;
  product !: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServicesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = String(params.get('id'));
      this.getProductDetail(this.productId);
    });
  }

  getProductDetail(id: string) {
    this.productService.getProduct(id).subscribe(
      (product: IProduct) => {
        console.log(product);
        if (product) {
          this.product = product;
        } else {
          console.log("Product not found");
        }
      },
      (error) => {
        console.log(error);
        // Xử lý lỗi nếu cần
      }
    );
  }
 
}