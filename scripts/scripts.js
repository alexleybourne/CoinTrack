// Page load and setup

function pageLoaded() {

  let alexTextinAnimation1 = anime({
    targets: '.alexLetters',
    rotate: -90,
    duration: 0
  }) 

  let alexTextinAnimation = anime({
    targets: '.alexLetters',
    opacity: 1,
    height: "18vw",
    rotate: 0,
    delay: anime.stagger(200),
    duration: 1800
  }) 

  let navTextAnimation = anime({
    targets: '.navLetters',
    translateY: "-100px",
    duration: 0
  }) 
}

// Scroll Value
let scrollPosition = 0
let landingHeight = 0

window.addEventListener('scroll', function() {
  scrollPosition = window.pageYOffset
  landingHeight = document.getElementById('landingArea').offsetHeight
  landingHeight = landingHeight / 2

  // Bring In Animations
  if (scrollPosition > landingHeight) {
    let hideAlexTextinAnimation = anime({
      targets: '.alexLetters',
      opacity: 0,
      height: "0vw",
      rotate: 0,
      duration: 1000
    })
  
    let navAnimation = anime({
      targets: '.navLetters',
      opacity: 1,
      translateY: 0,
      delay: anime.stagger(100),
      duration: 1000
    }) 

    document.getElementById("navBar").classList.remove("navBarHidden")
    document.getElementById("navBar").classList.add("navBar")

  }

  // Hide Animations
  if (scrollPosition < landingHeight) {

    let alexTextinAnimation = anime({
      targets: '.alexLetters',
      opacity: 1,
      height: "18vw",
      rotate: 0,
      delay: anime.stagger(200),
      duration: 1800
    }) 

    let navTextAnimation = anime({
      targets: '.navLetters',
      translateY: "-100px",
      opacity: 0,
      duration: 0
    })

    document.getElementById("navBar").classList.remove("navBar")
    document.getElementById("navBar").classList.add("navBarHidden")

  }

})




