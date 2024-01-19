gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


function GetForParallax() {
  const scrollButtton = document.querySelector('.mouse-class')
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scrollTop', `${scrollY}px`)
    if (scrollY > 10) {
      scrollButtton.classList.add('scrollButttonDelet')
    }
    else {
      scrollButtton.classList.remove('scrollButttonDelet')
    }
  })
}

function AnimationForBurger () {
  const burger = document.querySelector('.burger-mountain');
  burger.addEventListener('click', (e) => {
    e.preventDefault()
    // burger.addEventListener('mouseenter', () => {
    burger.style.setProperty('--position-burger', `${50}%`)
    // })
    console.log('dasjbdsakjd')
  })
  burger.addEventListener('mouseleave', () => {
    burger.style.setProperty('--position-burger', `${0}%`)
  })

}


function AnimationGsapSecond() {
  const tl = gsap.timeline();
  gsap.fromTo('.c',
    { opacity: 0 },
    {
      x: 400,
      opacity: 1,
      rotate: 360,
      duration: 3,
    scrollTrigger: {
        trigger: '.c',
        start: 'top center',
        markers: true,
        scrub: true,
        end: 500,
      },
    })
}

function HoverEfectCard() {
  const card = document.querySelectorAll('.card-item-content')

  const listOfCard = Array.from(card)

  card.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
      const listOfIndex = listOfCard.findIndex(item => item === element)
      
      listOfCard[listOfIndex].classList.add('card-item-content-active')
      for(let i = 1; i <= 1; i++) {
        if (listOfCard.includes(listOfCard[listOfIndex - i]) === true) {
          listOfCard[listOfIndex - i].classList.add('card-item-content-hover-left')
        }

        if (listOfCard.includes(listOfCard[listOfIndex + i]) === true) {
          listOfCard[listOfIndex + i].classList.add('card-item-content-hover-right')
        }
      }
    })
    element.addEventListener('mouseleave', (e) => {

      listOfCard.forEach(cardItem => {
        cardItem.classList.remove('card-item-content-active')
        cardItem.classList.remove('card-item-content-hover-left')
        cardItem.classList.remove('card-item-content-hover-right')
      })


    })
  })

}

HoverEfectCard()
AnimationForBurger()
GetForParallax()
