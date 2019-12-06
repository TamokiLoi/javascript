import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    HomeComponent, LoginComponent, Page404Component, Page500Component
} from './components/layout';
import { AuthGuard } from './common/guards';

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
                component: HomeComponent
            },
            {
                path: 'master-data',
                data: {
                    title: 'Master Data',
                },
                children: [
                    {
                        path: 'master-data-type',
                        loadChildren: './components/pages/master-data/master-data-type/master-data-type.module#MasterDataTypeModule',
                        data: {
                            title: 'Master Data Type'
                        },
                    },
                    {
                        path: 'master-data-list',
                        loadChildren: './components/pages/master-data/master-data-list/master-data-list.module#MasterDataListModule',
                        data: {
                            title: 'Master Data List'
                        },
                    },
                ]
            },
            {
                path: 'administration',
                data: {
                    title: 'Administration',
                },
                children: [
                    {
                        path: 'user',
                        loadChildren: './components/pages/administration/user/user.module#UserModule',
                        data: {
                            title: 'User'
                        },
                    },
                    {
                        path: 'language',
                        loadChildren: './components/pages/administration/language/language.module#LanguageModule',
                        data: {
                            title: 'Language'
                        },
                    },
                ]
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
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
