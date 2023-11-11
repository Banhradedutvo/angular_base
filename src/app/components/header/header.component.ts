import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showLogout = false;

  constructor( private router: Router) {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      // Mục "accessToken" đã được lưu trong localStorage
      console.log('Token:',accessToken);
      console.log('Đã đăng nhập');
      this.showLogout = true;
    } else {
      // Mục "accessToken" chưa được lưu trong localStorage
      this.showLogout = false;
      console.log('Chưa đăng nhập');
    }
  }

  onMouseEnter() {
    this.showLogout = true;
  }

  onMouseLeave() {
   
  }
  logout() {
    if(!window.confirm("Bạn có muốn đăng xuất ko?"))return;
    localStorage.removeItem('accessToken');
    this.showLogout = false;
    console.log('Đã đăng xuất');
    alert("Bạn đã đăng xuất");
    setTimeout(()=>{
      this.router.navigate(['']);
    },2000)
  }
}