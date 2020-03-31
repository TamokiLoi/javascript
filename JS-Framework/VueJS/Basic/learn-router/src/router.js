// Define routes to component
import Header from "./components/layouts/Header"
import Error from "./components/404"
import Home from './components/Home'

const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'))
    }, 'user')
}
const UserList = resolve => {
    require.ensure(['./components/user/Index.vue'], () => {
        resolve(require('./components/user/Index.vue'))
    }, 'user')
}
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'))
    }, 'user')
}
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'))
    }, 'user')
}

export const routes = [{
        path: '/',
        name: 'homepage',
        components: {
            default: Home,
            'page-header': Header
        }
    },
    {
        path: '/user',
        name: 'user',
        component: User,
        children: [
            { path: '', name: 'index', component: UserList },
            {
                path: ':id',
                name: 'userdetail',
                component: UserDetail,
                beforeEnter: (to, from, next) => {
                    console.log('Action route guard!');
                    next();
                }
            },
            { path: 'edit/:id', name: 'useredit', component: UserEdit },
        ]
    },
    { path: '/auth-redirect', redirect: { name: 'homepage' } },
    { path: '/404', name: 'errorpage', component: Error },
    { path: '*', redirect: '/404' }
]