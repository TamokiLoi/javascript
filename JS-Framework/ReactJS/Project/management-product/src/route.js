import React from 'react';
import HomePage from './pages/Home/HomePage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import ProductListPage from './pages/ProductList/ProductListPage';
import ProductActionPage from './pages/ProductAction/ProductActionPage';

const routes = [
    { path: '/', exact: true, main: () => <HomePage /> },
    { path: '/product', exact: true, main: () => <ProductListPage /> },
    { path: '/product/add', exact: false, main: ({history}) => <ProductActionPage history={history}/> },
    { path: '/product/edit/:id', exact: false, main: ({match}) => <ProductActionPage match={match}/> },
    { path: '', exact: false, main: () => <NotFoundPage /> },
];

export default routes;