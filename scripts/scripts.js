// Page load and setup

function pageLoaded() {
  console.log('Loaded')
}

// Nav Value
let navIn = false

// Scroll Value
let scrollPosition = 0

window.addEventListener('scroll', function() {
  scrollPosition = window.pageYOffset
  let landingHeight = document.getElementById('landingArea').offsetHeight
  areaHeight = landingHeight / 3

  // At Top of Page
  if (scrollPosition < areaHeight) {

    // Nav Slide out
    document.getElementById("navBar").classList.remove("navBar")
    document.getElementById("navBar").classList.add("navBarHidden")

    // Underline Control
    navIn = false
    document.getElementById('underline').style.width = '0px'
    document.getElementById('underline').style.hidden = true
  

    // Removes Animations from Nav links
    let navlinks = document.querySelectorAll('.navLink')
    for (var i = 0; i < navlinks.length; i++) {
        navlinks[i].classList.remove("slide-in-top")
    }

    // Nav Logo Animation
    let navletters = document.querySelectorAll('.rotate-in')
    for (var i = 0; i < navletters.length; i++) {
        navletters[i].classList.remove("rotate-in")
        navletters[i].classList.add("rotate-out")
    }

    // Big Letters Animate in
    let letters = document.querySelectorAll('.rotate-fade-out')
    for (var i = 0; i < letters.length; i++) {
        letters[i].classList.add("rotate-fade-in")
        letters[i].classList.remove("rotate-fade-out")
    }

  }

  // Scroll off top
  if (scrollPosition > areaHeight) {

    // Nav Slide in
    document.getElementById("navBar").classList.remove("navBarHidden")
    document.getElementById("navBar").classList.add("navBar")

    // Underline Control
    navIn = true
    whereAmI()

    // Removes Animations from Nav links
    let navlinks = document.querySelectorAll('.navLink')
    for (var i = 0; i < navlinks.length; i++) {
        navlinks[i].classList.add("slide-in-top")
    }

    // Nav Logo Animation
    let navletters = document.querySelectorAll('.rotate-out')
    for (var i = 0; i < navletters.length; i++) {
        navletters[i].classList.add("rotate-in")
        navletters[i].classList.remove("rotate-out")
    }

    // Big Letters Animate out
    let letters = document.querySelectorAll('.rotate-fade-in')
    for (var i = 0; i < letters.length; i++) {
        letters[i].classList.remove("rotate-fade-in")
        letters[i].classList.add("rotate-fade-out")
    }

  }

})

// Get objects Offset
function offset(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

// Get objects left and width
function getPos(object) {
  let pos = offset(document.getElementById(object))
  let width = document.getElementById(object).offsetWidth
  pos = pos.left
  return { left: pos, width: width }
}

// Find which area you are the user is on and update the nav
// Updates the squiggly underline too

let position = "aboutNav"

function whereAmI() {

  if (navIn == true) {
    let landingHeight = document.getElementById('landingArea').offsetHeight
    let aboutHeight = document.getElementById('aboutDiv').offsetHeight + landingHeight

    if (scrollPosition > landingHeight && scrollPosition < aboutHeight) {
      console.log("you're in the about section")
      position = "aboutNav"
    }

    aboutPos = getPos(position)

    setTimeout(function() {
      document.getElementById('underline').style.hidden = false
      document.getElementById('underline').style.width = (aboutPos.width + 20) +  "px"
    }, 4000)

    document.getElementById('underline').style.left = (aboutPos.left - 10) + "px"
  }
}






