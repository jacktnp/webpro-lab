Vue.component('blog', {
    props: ['dose'],
    template: `
        <div class="card mx-1">
            <img :src="dose.image" class="card-img-top" :alt="dose.title">
            <div class="card-body">
                <h5>{{ dose.title }} <span class="badge badge-success">{{ dose.likes }} <i class="fas fa-heart"></i></span></h5>
                <p class="card-text">{{ dose.detail }}</p>
                <button type="button" class="btn btn-primary" @click.prevent.stop="dose.likes += 1"><i class="fas fa-thumbs-up"></i> Like</button>
                <button type="button" class="btn btn-info" @click.stop="showComment(dose)"><i class="fas fa-comments"></i> Comments</button>

                <!-- comment -->
                <div v-show="dose.showComment">
                <div class="card mt-2 text-dark" v-for="(comment, index) in dose.comments">
                <div class="card-body">
                  <h6 class="card-title">Comment {{index + 1}}</h6>
                  <p class="card-text">
                    {{ comment.text }}<br />
                    <small class="text-muted">Create By: {{ comment.createBy }}</small>
                  </p>
                </div>
                </div>
                <!-- /comment -->
                <div class="row mt-2">
                    <div class="col-md-9"><input type="text" class="form-control" placeholder="comment here"></div>
                    <div class="col-md-2"><button type="button" class="btn btn-danger"><i class="fas fa-plus"></i></button></div>
                </div>
                </div>

            </div>
        </div>
    `,
    methods: {
        showComment(dose) {
            dose.showComment = !dose.showComment;
        }
    },
})