// Page load and setup

function pageLoaded() {

 

}

// Scroll Value
let scrollPosition = 0
let landingHeight = 0
let hideNav = true

window.addEventListener('scroll', function() {
  scrollPosition = window.pageYOffset
  landingHeight = document.getElementById('landingArea').offsetHeight
  areaHeight = landingHeight / 3

  // Bring In Animations
  if (scrollPosition < areaHeight) {

    document.getElementById("navBar").classList.remove("navBar")
    document.getElementById("navBar").classList.add("navBarHidden")

    let letters = document.querySelectorAll('.rotate-fade-out')
    for (var i = 0; i < letters.length; i++) {
        letters[i].classList.add("rotate-fade-in")
        letters[i].classList.remove("rotate-fade-out")
    }

  }

  // Hide Animations
  if (scrollPosition > areaHeight) {

    document.getElementById("navBar").classList.remove("navBarHidden")
    document.getElementById("navBar").classList.add("navBar")

    let letters = document.querySelectorAll('.rotate-fade-in')
    for (var i = 0; i < letters.length; i++) {
        letters[i].classList.remove("rotate-fade-in")
        letters[i].classList.add("rotate-fade-out")
    }

  }

})




