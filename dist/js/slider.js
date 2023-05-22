const cardsContainer = document.querySelector('.scrollable-area')
const buttonScrollUp = document.querySelector('#up')
const buttonScrollDown = document.querySelector('#down')
const cardHeight = 310

document.addEventListener("DOMContentLoaded", function (e) {

  let scrollLenght = cardHeight + parseInt(getComputedStyle(cardsContainer).gap.replace('px', ''))

  buttonScrollDown.addEventListener('click', () => {
    cardsContainer.scroll({
      top: cardsContainer.scrollTop + scrollLenght,
      behavior: "smooth"
    })
  })

  buttonScrollUp.addEventListener('click', () => {
    cardsContainer.scroll({
      top: cardsContainer.scrollTop - scrollLenght,
      behavior: "smooth"
    })
  })

})