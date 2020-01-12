
function pageLoaded() {

  Sticker.init('.sticker')
  
  console.log('Yeet')

  let animation = anime({
    targets: '.alexLetters',
    opacity: 1,
    height: 200,
    width: 200,
    delay: anime.stagger(400),
    duration: 100
    }) 

}
