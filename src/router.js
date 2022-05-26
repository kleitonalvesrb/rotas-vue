import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home.vue';
import Produto from './pages/produto/Produto.vue';

/**
 * Registrando o Router na instancia do vue
 */
Vue.use(Router);

export default new Router({
    mode : 'hash',
    routes:[
        {
            path : '/', component: Home
        },
        {
            path : '/produto', component: Produto
        }
    ]
});