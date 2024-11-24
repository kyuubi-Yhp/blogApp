const posts = []

const titleInputNode = document.querySelector('.title__post-js')
const textInputNode = document.querySelector('.text__post-js')
const publicationBtnNode = document.querySelector('.relise__btn-js')
const newPostInLentaNode = document.querySelector('.visual__lenta-js')

publicationBtnNode.addEventListener('click', function () {
  const postFromUser = getPostFromUser()
  addPost(postFromUser)
  renderPosts()
})

function getPostFromUser() {
  const title = titleInputNode.value
  const text = textInputNode.value
  return {
    title: title,
    text: text
  }
}

function addPost({ title, text }) {
  posts.push({
    title: title,
    text: text
  })
}

function getPosts() {
  return posts
}

function renderPosts() {
  const posts = getPosts()

  let postsHTML = ''

  posts.forEach(post => {
    postsHTML += `
  <div class='post'>
    <p class='post__title'>${post.title}</p>
    <p class='post__text'>${post.text}</p>
  </div>`
  });

  newPostInLentaNode.innerHTML = postsHTML
}