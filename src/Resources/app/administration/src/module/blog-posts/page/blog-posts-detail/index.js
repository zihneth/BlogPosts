import template from './blog-posts-detail.html.twig'; // template which will show data 
const { Component } = Shopware;

Component.register('blog-posts-detail', {
    template,
    
    inject: [
      'repositoryFactory'  
    ],
    /*
    mixin: [
      Mixin.getByName('notification')  
    ],
    */
    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },
    
    props: {
        postId: {
            required: true,
            type: String
        },
      },
    
    data(){
        return {
            posts: null,
            isLoading: false,
            processSuccess: false,
            repository: null
        }
    },
    
    computed: {
        options(){
            return [
                { value: false, name: 'status'}
            ];
        }
    },
    
    created() {
        this.createdComponent();
    },
    
    methods: {
        createdComponent() {
    
            this.repository = this.repositoryFactory.create('blog_posts');
             this.getBundle();
        },
        
        getBundle() {
            this.postId = this.$route.params.id;
            this.repository
            .get( this.postId, Shopware.Context.api)
            .then((entity) => {
                this.posts = entity;
             });
        },
        
        onClickSave(){
            this.isLoading = true,
            
            this.repository.save(this.posts, Shopware.Context.api).then(() => {
                this.getBundle();
                this.isLoading = false;
                this.processSucess = true; 
            }).catch((exception) => {
                this.isLoading = false;
                console.log(exception);
            });
        },
        
        saveFinish() {
            this.processSuccess = false;
        },
        
        onClickDelete(){
            this.repository.delete( this.postId, Shopware.Context.api).then(() => {
                this.$router.push({ name: 'blog.posts.list' });
            }).catch((exception) => {
                console.log(exception);
            });
        }
    }
});