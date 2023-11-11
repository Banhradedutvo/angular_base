import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { DashboadPageComponent } from './pages/admin/dashboad-page/dashboad-page.component';
import { ProductManagerComponent } from './pages/admin/product-manager/product-manager.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { ProductDetailPagesComponent } from './pages/product-detail-pages/product-detail-pages.component';
import { AddProductFormComponent } from './pages/admin/add-product-form/add-product-form.component';
import { UpdateProductFormComponent } from './pages/admin/update-product-form/update-product-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'about',
        component: AboutPageComponent
      },
      {
        path: 'products',
        component: ProductPageComponent
      },
      {path:'products/:id', component:ProductDetailPagesComponent},
      {
        path: 'contact', component: ContactPageComponent
      }
    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', redirectTo: "dashboard", pathMatch: "full" },
      { path: 'dashboard', component: DashboadPageComponent },
      { path: 'products', component: ProductManagerComponent },
      {path:'products/add', component:AddProductFormComponent},
      {path:'products/:id/edit', component:UpdateProductFormComponent}
     
 

    ]
  },
  {
    path:'auth',children:[
      { path:'signup',component:SignupFormComponent},
      { path:'signin',component:SigninFormComponent}
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
