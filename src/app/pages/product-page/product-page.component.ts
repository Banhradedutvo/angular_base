import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ICategory } from 'src/app/interfaces/category';
import { IProduct,IProductResponse } from 'src/app/interfaces/product';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent implements OnInit {
  currentPage = 1;
  productsPerPage = 8;
  totalPages = 0;
  pagedProducts: IProduct[] = [];
  products: IProduct[] = [];
  currentCategory: string = '';
  categories: ICategory[] = [];

  public searchTerm = '';

  constructor(
    private categoryService: CategoryService,
    private productService: ProductServicesService
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      (data: ICategory[]) => {
        this.categories = data;
      },
      (error) => {
        console.log('Error retrieving categories:', error);
      }
    );

    this.productService.getProducts().subscribe(({data}) => {
      this.products = data;
      console.log(data);
      this.totalPages = Math.ceil(this.products.length / this.productsPerPage);
      this.updatePagedProducts();
    });
  }

  updatePagedProducts() {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
  
    if (this.currentCategory !== '') {
      this.pagedProducts = this.products
        .filter((product) => product.id_category && product.id_category.toString() === this.currentCategory)
        .slice(startIndex, endIndex);
    } else {
      this.pagedProducts = this.products.slice(startIndex, endIndex);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedProducts();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedProducts();
    }
  }

  filterByCategory(event: any) {
    const category: string = event.target.value;
    this.currentCategory = category;
    this.currentPage = 1;
    this.updatePagedProducts();
  }
}