import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent, Page404Component, Page500Component } from './components/layout';
import { AuthGuard } from './guards';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: {
            customLayout: true
        }
    },
    {
        path: '',
        data: {
            title: 'Get Started'
        },
        children: [
            {
                path: '',
                loadChildren: './components/home/home.module#HomeModule',
                data: {
                    title: 'Dashboard'
                }
            },
            {
                path: 'catalog',
                data: {
                    title: 'Catalog'
                },
                children: [
                    {
                        path: 'category',
                        loadChildren: './components/pages/category/category.module#CategoryModule',
                        data: {
                            title: 'Category'
                        },
                    },
                    {
                        path: 'product',
                        loadChildren: './components/pages/product/product.module#ProductModule',
                        data: {
                            title: 'Product'
                        },
                    },
                ],
            },
            {
                path: 'user',
                loadChildren: './components/user/user.module#UserModule',
                data: {
                    title: 'User Management'
                },
            },
            {
                path: 'alert',
                loadChildren: './components/alert/alert.module#AlertModule',
                data: {
                    title: 'Alert',
                }
            },
            {
                path: '**',
                component: Page404Component,
                data: {
                    title: 'Page 404'
                }
            },
        ],
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
