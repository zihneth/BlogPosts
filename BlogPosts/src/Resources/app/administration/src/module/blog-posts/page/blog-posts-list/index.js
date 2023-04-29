import template from './blog-posts-list.html.twig'; // template which will show data 
const { Component } = Shopware;
const { Criteria } = Shopware.Data;

Component.register('blog-posts-list', {
    template,
    
    inject: [
      'repositoryFactory'  
    ],
    
    data(){
        return {
            repository: null,
            posts: null
        }
    },
    
    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },
    
    computed: {
        columns(){
            return this.getColumns();
        }
    },
    
    created() {
        this.createdComponent();
    },
    
    methods: {
        createdComponent() {
            const options = {
                version: 1 // default is the latest api version
            };
    
            this.repository = this.repositoryFactory.create('blog_posts', null, options);
            this.repository.search(new Criteria(), Shopware.Context.api).then((result) =>{
               this.posts = result;
            });
        },
        
        getPosts() {
            this.repository.get(new Criteria(), Shopware.Context.api).then((result) =>{
                this.posts = result; 
             });
        },
        
        getColumns(){
            return [{
                property: 'name',
                label: this.$tc('blog-posts.list.columnName'),
                routerLink: 'blog.posts.detail',
                inlineEdit: 'string',
                allowResize: true,
                primary: true
            }, {
                property: 'created_at',
                label: this.$tc('blog-posts.list.columnCreatedDate'),
                allowResize: true,
            }, {
                property: 'active',
                label: this.$tc('blog-posts.list.columnStatus'),
                allowResize: true,
            }];
        }
    }
    
});