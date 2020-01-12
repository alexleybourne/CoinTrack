
function pageLoaded() {

  Sticker.init('.sticker')
  
  console.log('Yeet')

  let animation = anime({
    targets: '.alexLetters',
    opacity: 1,
    height: 200,
    width: 200,
    rotate: 0,
    delay: anime.stagger(200),
    duration: 2000
    }) 

}
