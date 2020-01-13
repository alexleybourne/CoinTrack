
function pageLoaded() {

  let animation1 = anime({
    targets: '.alexLetters',
    rotate: -90,
    duration: 0
    }) 

  let animation = anime({
    targets: '.alexLetters',
    opacity: 1,
    height: "18vw",
    rotate: 0,
    delay: anime.stagger(200),
    duration: 1800
    }) 

}

let scrollPosition = 0

window.addEventListener('scroll', function() {
  scrollPosition = window.pageYOffset

  if (scrollPosition > 200) {
    navAnimation()
  }

  if (scrollPosition < 200) {

    let animation = anime({
      targets: '.alexLetters',
      opacity: 1,
      height: "18vw",
      rotate: 0,
      delay: anime.stagger(200),
      duration: 1800
    }) 

  }

})


function navAnimation() {

  console.log('nav animation')
  
  let animation = anime({
    targets: '.alexLetters',
    opacity: 0,
    height: "0vw",
    rotate: 0,
    duration: 1000
  })
  
  
}

