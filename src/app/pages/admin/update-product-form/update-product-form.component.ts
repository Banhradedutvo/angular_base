import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { IProduct } from 'src/app/interfaces/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-update-product-form',
  templateUrl: './update-product-form.component.html',
  styleUrls: ['./update-product-form.component.css']
})
export class UpdateProductFormComponent implements OnInit {
  product: IProduct | undefined;
  productId!: string;
  updateForm!: FormGroup;
  showSuccessMessage = false;
  showErrorMessage = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServicesService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
    this.productService.getProduct(this.productId).subscribe(
      (response: IProduct) => {
        this.product = response;
        this.initializeForm();
      },
      error => {
        console.error(error);
      }
    );
  }

  initializeForm() {
    this.updateForm = this.formBuilder.group({
      name: [this.product?.name, Validators.required],
      image: [this.product?.image, Validators.required],
      price: [this.product?.price, Validators.required],
      description: [this.product?.description, Validators.required],
      id_category: [this.product?.id_category, Validators.required]
    });
  }

  updateProduct() {
    if (this.updateForm.valid && this.product) {
      const updatedProduct: IProduct = {
        ...this.updateForm.value,
       
      };
  
      this.productService.updateProduct(this.productId, updatedProduct).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 400) {
            console.log('Yêu cầu không hợp lệ',updatedProduct);
          } else {
            console.log('Cập nhật thất bại');
          }
          this.showErrorMessage = true;
          console.error(error);
          return throwError(error);
        })
      ).subscribe(
        () => {
          console.log('Cập nhật sản phẩm thành công');
          this.showSuccessMessage = true;
  
          setTimeout(() => {
            this.showSuccessMessage = false;
            this.router.navigate(['/admin/products']);
          }, 2000);
        }
      );
    } else {
      console.log('Form không hợp lệ');
    }
  }
}