Vue.component('blog', {
    template: `
        <div class="card" style="width: 18rem;">
            <img :src="dose.image" class="card-img-top" :alt="dose.title">
            <div class="card-body">
                <h3>{{ dose.title }}</h3>
                <p class="card-text">{{ dose.detail }}</p>
            </div>
        </div>
    `
})