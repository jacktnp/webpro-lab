Vue.component('card-blog', {
    props: ['blog'],
    template: `
        <div class="card my-3">
            <img :src="blog.image" class="card-img-top img-fluid">
        <div class="card-body">
            <h5 class="card-title">{{ blog.title }} <span class="badge badge-success ml-5">Likes: {{ blog.likes }}</span></h5>
            <p class="card-text" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ blog.content }}
                <br>
                <small class="text-muted">Create By: {{ blog.createBy }}</small>
                <small class="text-muted ml-5">Create Date: {{ blog.createDate }}</small>
            </p>
            <button class="btn btn-success" v-on:click.prevent.stop="blog.likes += 1">I like this!</button>
            <button class="btn btn-info">Show comment...</button>
            <div class="card mt-2 text-dark" style="display: none;">
                <div class="card-body">
                    <h6 class="card-title">Comment 1</h6>
                    <p class="card-text">Yes I agree!<br>
                        <small class="text-muted">Create By: Jack</small>
                        <small class="text-muted ml-5">Create Date: </small>
                    </p>
                </div>
            </div>
        </div>
    `
})