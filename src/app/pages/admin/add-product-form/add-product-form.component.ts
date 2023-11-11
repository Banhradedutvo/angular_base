import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { Router } from '@angular/router';

function noWhitespaceValidator(control: any) {
  const isWhitespace = (control.value || '').trim().length === 0;
  const isValid = !isWhitespace;
  return isValid ? null : { 'whitespace': true };
}

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent {
  productForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductServicesService,
    private router: Router
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, noWhitespaceValidator]],
      price: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(6), noWhitespaceValidator]],
      id_category: ['', Validators.required]
    });
  }

  addProduct(): void {
    if (this.productForm.invalid) {
      return;
    }

    const product = this.productForm.value;
    this.productService.addProduct(product).subscribe(
      response => {
        console.log('Sản phẩm đã được thêm:', response);
        this.successMessage = 'Sản phẩm đã được thêm thành công.';
        this.productForm.reset();
        setTimeout(() => {
          alert("Thêm sản phẩm thành công");
          this.router.navigate(['/admin/products']); // Chuyển hướng đến trang danh sách sản phẩm
        }, 2000);
      },
      error => {
        console.error('Lỗi khi thêm sản phẩm:', error);
        this.errorMessage = 'Có lỗi xảy ra khi thêm sản phẩm. Vui lòng thử lại sau.';
      }
    );
  }
}