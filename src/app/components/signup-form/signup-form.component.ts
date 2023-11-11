import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  registerForm!: FormGroup;
  registrationSuccess = false;
  registrationMessage = '';
  registeredUser: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
    });
  
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const user = {
      userName: this.registerForm.value.userName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      confirmPassword:this.registerForm.value.confirmPassword
    };

    this.authService.registerUser(user).subscribe(
      response => {
        // Xử lý thành công
        this.registrationSuccess = true;
        this.registrationMessage = response.message;
        this.registeredUser = response.user;
        setTimeout(()=>{
          alert("Đăng ký thành công");
          this.router.navigate(['/auth/signin']);
        },2000)

      },
      error => {
        this.registrationMessage = error.error.message ;
        console.error(error);
      }
    );
  }
}