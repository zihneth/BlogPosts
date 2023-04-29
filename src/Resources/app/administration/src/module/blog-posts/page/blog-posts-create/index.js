const { Component } = Shopware;

Component.extend('blog-posts-create', 'blog-posts-detail', {
    methods: {
        getBundle(){
            this.posts = this.repository.create(Shopware.Context.api);
        },
        onClickSave() {
            this.isLoading = true;
            this.repository.save(this.posts, Shopware.Context.api).then(() => {
                this.isLoading = false;
                this.$router.push({ name: 'blog.posts.detail', params: { id: this.posts.id } });
            }).catch((exception) => {
                this.isLoading = false;
                console.log(exception);
            });
        }
    }
});