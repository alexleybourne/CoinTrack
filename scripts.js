
function pageLoaded() {

    console.log('Yeet')

    let animation = anime({
        targets: '.animeTest',
        translateX: 100,
        borderRadius: 50,
        duration: 2000,
        easing: 'linear',
        direction: 'alternate',
        loop: 'infinte'
      });    

}