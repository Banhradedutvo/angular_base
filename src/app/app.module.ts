import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboadPageComponent } from './pages/admin/dashboad-page/dashboad-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddProductFormComponent } from './pages/admin/add-product-form/add-product-form.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { ProductManagerComponent } from './pages/admin/product-manager/product-manager.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductDetailPagesComponent } from './pages/product-detail-pages/product-detail-pages.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProductFormComponent } from './pages/admin/update-product-form/update-product-form.component';
import { ApolloModule, Apollo } from 'apollo-angular';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [
    AppComponent,
    DashboadPageComponent,
    HomePageComponent,
    AddProductFormComponent,
    BaseLayoutComponent,
    ProductManagerComponent,
    NotFoundComponent,
    ProductPageComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    ContactPageComponent,
    AboutPageComponent,
    ProductDetailPagesComponent,
    SearchPipe,
    LoadingPageComponent,
    UpdateProductFormComponent,
    SignupFormComponent,
    SigninFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzMessageModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
