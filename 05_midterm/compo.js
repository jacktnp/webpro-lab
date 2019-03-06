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
                <br>
                <div class="row mt-2">
                    <div class="col-md-9"><input type="text" class="form-control" placeholder="comment here"></div>
                    <div class="col-md-2"><button type="button" class="btn btn-danger">add</button></div>
                </div>
                
                <!-- comment -->
                <div class="card mt-2 text-dark" v-show="dose.showComment" v-for="(comment, index) in dose.comments">
                <div class="card-body">
                  <h6 class="card-title">Comment {{index + 1}}</h6>
                  <p class="card-text">
                    {{ dose.text }}<br />
                    <small class="text-muted">Create By: {{ dose.createBy }}</small>
                    <small class="text-muted ml-5">Create Date: </small>
                  </p>
                </div>
              </div>
              <!-- /comment -->
            </div>
        </div>
    `
})