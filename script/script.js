const posts = []

const titleInputNode = document.querySelector('.title__post-js')
const textInputNode = document.querySelector('.text__post-js')
const publicationBtnNode = document.querySelector('.relise__btn-js')
const newPostInLentaNode = document.querySelector('.visual__lenta-js')
const validationMessage = document.getElementById('validationMessage')
const currentDate = new Date()
const formatDate = `${currentDate.getHours()}:${currentDate.getMinutes()} ${currentDate.getFullYear()}`



publicationBtnNode.addEventListener('click', function () {
  const postFromUser = getPostFromUser()
  addPost(postFromUser)
  renderPosts()
})

function getPostFromUser() {
  const title = titleInputNode.value
  const text = textInputNode.value
  const time = formatDate
  return {
    time: time,
    title: title,
    text: text
  }
}

function addPost({ time, title, text }) {
  posts.push({
    time: time,
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
    <p class='post__time'>${post.time}</p>
    <p class='post__title'>${post.title}</p>
    <p class='post__text'>${post.text}</p>
    </div>`
  });
  
  newPostInLentaNode.innerHTML = postsHTML
}

// валидация 
titleInputNode.addEventListener('input', validation)
textInputNode.addEventListener('input', validation)

function validation() {
  const titleLen = titleInputNode.value
  const textLen = textInputNode.value
  
  if (titleLen.length >= 50) {
    validationMessage.innerText = 'длина заголовка не должна привышать 50 символов'
    validationMessage.classList.remove('validationMessage__hidden')
    return
  }
  
  if (textLen.length >= 50) {
    validationMessage.innerText = 'длина текста не должна привышать 50 символов'
    validationMessage.classList.remove('validationMessage__hidden')
    return
  }
  
  validationMessage.classList.add('validationMessage__hidden')
}