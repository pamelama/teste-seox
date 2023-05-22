const postsAPIUrl = 'https://teste-frontend.seox.com.br/wp-json/wp/v2/posts?_embed'
const commentsAPIUrl = 'https://teste-frontend.seox.com.br/index.php/wp-json/wp/v2/comments?post='

const mainCardArea = document.querySelector('#main-card')
const scrollableCardsArea = document.querySelector('#scrollable-cards-area')

const posts = []

const getPosts = () => {
  axios
    .get(postsAPIUrl)
    .then((response) => {

      response.data.map(data => {
        posts.push({
          title: data.title.rendered,
          hat: data.acf.hat,
          image: data._embedded["wp:featuredmedia"][0].source_url,
        })
      })

      mainCardArea.innerHTML = createMainVideoCard(posts[0])

      posts.map(post => {
        scrollableCardsArea.innerHTML += generateVideoCard(post)
      })

    })
    .catch((error) => console.error(error))
}

const createMainVideoCard = (content) => {
  return `
  <main class="main-video-card">
  <div class="card-img-overlay-container">
    <div class="img-overlay"></div>
    <img src="${content.image}" class="card-img-top">
  </div>

  <div class="main-video-card-content">
    <span class="video-play-button">
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.5 0C7.38817 0 0 7.38817 0 16.5C0 25.6118 7.38817 33 16.5 33C25.6118 33 33 25.6118 33 16.5C33 7.38817 25.6118 0 16.5 0ZM21.8073 16.7541L13.7635 22.6065C13.7194 22.6382 13.6674 22.6571 13.6133 22.6612C13.5591 22.6652 13.5049 22.6543 13.4566 22.6295C13.4082 22.6048 13.3676 22.5672 13.3393 22.5209C13.3109 22.4746 13.2958 22.4214 13.2958 22.3671V10.6698C13.2956 10.6153 13.3105 10.5619 13.3388 10.5155C13.3671 10.469 13.4077 10.4313 13.4562 10.4065C13.5046 10.3817 13.559 10.3708 13.6132 10.375C13.6674 10.3792 13.7195 10.3984 13.7635 10.4304L21.8073 16.279C21.8453 16.3059 21.8763 16.3415 21.8977 16.3828C21.919 16.4242 21.9302 16.47 21.9302 16.5166C21.9302 16.5631 21.919 16.609 21.8977 16.6503C21.8763 16.6917 21.8453 16.7273 21.8073 16.7541V16.7541Z"
          fill="white" />
      </svg>
    </span>

    <div class="card-body">
      <div class="card-hat">${content.hat}</div>
      <h2 class="card-title">${content.title}</h2>
    </div>
  </div><!-- /.main-video-card-content -->
</main>
  `
}

const generateVideoCard = (post) => {

  return `
  <div class="col col-xl-12 scrollable-card">
    <div class="video-card">
      <img src="${post.image}" class="card-img-top img-fluid">

      <span class="video-play-button">
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.5 0C7.38817 0 0 7.38817 0 16.5C0 25.6118 7.38817 33 16.5 33C25.6118 33 33 25.6118 33 16.5C33 7.38817 25.6118 0 16.5 0ZM21.8073 16.7541L13.7635 22.6065C13.7194 22.6382 13.6674 22.6571 13.6133 22.6612C13.5591 22.6652 13.5049 22.6543 13.4566 22.6295C13.4082 22.6048 13.3676 22.5672 13.3393 22.5209C13.3109 22.4746 13.2958 22.4214 13.2958 22.3671V10.6698C13.2956 10.6153 13.3105 10.5619 13.3388 10.5155C13.3671 10.469 13.4077 10.4313 13.4562 10.4065C13.5046 10.3817 13.559 10.3708 13.6132 10.375C13.6674 10.3792 13.7195 10.3984 13.7635 10.4304L21.8073 16.279C21.8453 16.3059 21.8763 16.3415 21.8977 16.3828C21.919 16.4242 21.9302 16.47 21.9302 16.5166C21.9302 16.5631 21.919 16.609 21.8977 16.6503C21.8763 16.6917 21.8453 16.7273 21.8073 16.7541V16.7541Z"
            fill="white" />
        </svg>
      </span><!-- /.video-play-button -->

      <span class="video-comments-info">
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.85 0.5C9.08156 0.5 11.7 2.80859 11.7 5.65625C11.7 8.50391 9.08156 10.8125 5.85 10.8125C5.32406 10.8125 4.815 10.7451 4.32844 10.6309C3.46781 11.1875 2.22553 11.75 0.701719 11.75C0.421031 11.75 0.166781 11.5771 0.0567562 11.3076C-0.053325 11.0381 -0.000196874 10.7275 0.189534 10.5166C0.204187 10.5049 0.826312 9.79883 1.28616 8.87598C0.483187 7.99414 0 6.875 0 5.65625C0 2.80859 2.61928 0.5 5.85 0.5ZM4.62937 9.2334C5.04 9.35645 5.45062 9.40625 5.85 9.40625C8.33062 9.40625 10.35 7.72461 10.35 5.65625C10.35 3.58789 8.33062 1.90625 5.85 1.90625C3.36937 1.90625 1.35 3.58789 1.35 5.65625C1.35 6.6875 1.84809 7.44922 2.26603 7.90918L2.92781 8.63867L2.48372 9.52637C2.38331 9.70215 2.27053 9.93066 2.15297 10.124C2.65106 9.97461 3.14156 9.74316 3.61969 9.40918L4.08937 9.13086L4.62937 9.2334ZM12.42 4.25586C15.525 4.37891 18 6.6377 18 9.40625C18 10.625 17.5162 11.7441 16.7147 12.626C17.1731 13.5488 17.7947 14.2549 17.8116 14.2666C18 14.4775 18.0534 14.7881 17.9184 15.0576C17.8341 15.3271 17.5781 15.5 17.2969 15.5C15.7753 15.5 14.5322 14.9375 13.6716 14.3809C13.185 14.4951 12.6759 14.5625 12.15 14.5625C9.84375 14.5625 7.84969 13.3848 6.89625 11.6768C7.38281 11.6094 7.84969 11.4951 8.29406 11.3369C9.08156 12.4268 10.5159 13.1562 12.15 13.1562C12.5494 13.1562 12.96 13.1064 13.3706 12.9834L13.9106 12.8809L14.3803 13.1592C14.8584 13.4932 15.3478 13.7246 15.8484 13.874C15.7303 13.6807 15.6178 13.4521 15.5166 13.2764L15.0722 12.3887L15.7331 11.6592C16.1522 11.2021 16.65 10.4375 16.65 9.40625C16.65 7.46387 14.8697 5.86426 12.5747 5.67383L12.6 5.65625C12.6 5.17285 12.5381 4.7041 12.42 4.25586Z"
            fill="#F6D0D1" />
        </svg>
        <span>0</span>
      </span><!-- /.video-comments-info -->

      <div class="card-body">
        <span class="card-hat">${post.hat}</span>
          <h2 class="card-title">${post.title}</h2>
      </div><!-- /.card-body -->

    </div><!-- /.video-card -->
  </div><!-- /.col -->
  `
}

getPosts()