import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Errors } from 'src/app/interfaces/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent {
  signinForm!: FormGroup;
  registrationMessage = '';
  registeredUser: any;
  registrationSuccess = false;
  // Define interface cho errors

  //...

  get errors() {
    return {
      email: this.signinForm.get('email')?.errors as Errors,
      password: this.signinForm.get('password')?.errors as Errors
    };
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthServiceService,private router: Router) {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
    });
  }

  get signinFormControl() {
    return this.signinForm.controls;
  }

  signinUser(): void {
    if (this.signinForm.invalid) {
      return;
    }
    this.authService.loginUser(this.signinForm.value).subscribe(
      response => {
        console.log(response);
        console.log(response.accessToken);
        localStorage.setItem('accessToken', response.accessToken);
        this.registrationSuccess = true;
        this.registrationMessage = response.message;
        this.registeredUser = response.user; // Phản hồi từ API
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken && response.user.role ==='member') {
          console.log(response.user.role);
       
          console.log('Đã đăng nhập');
          alert("Bạn đã đăng nhập thành công");
          setTimeout(()=>{
            this.router.navigate(['']);
          },2000)

        }else if(accessToken && response.user.role ==='admin'){
          console.log('Đã đăng nhập');
          alert("Bạn đã đăng nhập thành công");
          setTimeout(()=>{
            this.router.navigate(['/admin']);
          },2000)

         
        } else {
          // Mục "accessToken" chưa được lưu trong localStorage
          console.log('Chưa đăng nhập');
        }
      },
      error => {
        console.error(error);
        this.registrationMessage = error.error.message; // Xử lý lỗi nếu có
      }
    );
  }
}