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
  if (landingHeight < scrollPosition) {
    hideNav = false
  } else {
    hideNav = true
  }

  // Bring In Animations
  if (hideNav == false) {

    document.getElementById("navBar").classList.remove("navBarHidden")
    document.getElementById("navBar").classList.add("navBar")

    document.getElementById("alexLetters").classList.remove("rotate-fade-out")
    document.getElementById("alexLetters").classList.add("rotate-fade-in")

  }

  // Hide Animations
  if (hideNav == true) {

    document.getElementById("navBar").classList.remove("navBar")
    document.getElementById("navBar").classList.add("navBarHidden")

    document.getElementById("alexLetters").classList.remove("rotate-fade-in")
    document.getElementById("alexLetters").classList.add("rotate-fade-out")

  }

})




