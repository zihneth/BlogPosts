const { Module } = Shopware;
import './page/blog-posts-list'; // Component registered for module which will used for showing data  
import './page/blog-posts-detail';
import './page/blog-posts-create';

import enGB from './snippet/en-GB';
import deDE from './snippet/de-DE';

Module.register('blog-posts', {
    type: 'core',
    name: 'Blog',
    title: 'blog-posts.general.mainMenuItemList',
    description: 'blog-posts.general.descriptionTextModule',
    color: '#ff3d58',
    icon: 'default-shopping-paper-bag-product',
    snippets: {
        'en-GB': enGB,
        'de-De': deDE
    },

    routes: {
        'list': {
            component: 'blog-posts-list',
            path: 'list'
        },
        'detail': {
            component: 'blog-posts-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'blog.posts.list'
            }
        },
        'create': {
            component: 'blog-posts-create',
            path: 'create',
            meta: {
                parentPath: 'blog.posts.list'
            }
        }
    },

    navigation: [{
        label: 'blog-posts.general.mainMenuItemList',
        color: '#ff3d58',
        path: 'blog.posts.list',
        icon: 'default-shopping-paper-bag-product',
        position: 99
    }],
});