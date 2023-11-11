import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent {
  public searchTerm = '';
  products: IProduct[] = [];

  constructor(private productService: ProductServicesService) {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(
        (response) => {
          this.products = response.data;
        },
        (error) => {
          console.error('Lỗi khi lấy danh sách sản phẩm:', error);
        }
      );
  }

  deleteProduct(productId: string): void {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa sản phẩm này?');

    if (confirmDelete) {
      this.productService.deleteProduct(productId)
        .subscribe(
          () => {
            this.updateProductList();
            alert('Xóa sản phẩm thành công!');
          },
          (error) => {
            console.error('Lỗi khi xóa sản phẩm:', error);
            alert('Đã xảy ra lỗi khi xóa sản phẩm!');
          }
        );
    }
  }

  updateProductList(): void {
    this.getProducts();
  }

  editProduct(id: string): void {
 
  }
}