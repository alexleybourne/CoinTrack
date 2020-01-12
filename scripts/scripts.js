
function pageLoaded() {

  Sticker.init('.sticker')
  
  console.log('Yeet')

  let animation = anime({
    targets: '.alexLetters',
    opacity: 1,
    delay: anime.stagger(100),
    duration: 100
    }) 

}
