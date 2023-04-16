import { animate, stagger, inView, spring } from 'motion'

document.querySelectorAll('article').forEach((article) => {
  article.style.opacity = '0'
})

if (window.innerWidth >= 768) {
  //Mobilenet
  inView(
    'article',
    (info) => {
      animate(
        'article',
        { y: [80, 0], opacity: [0, 1] },
        { delay: stagger(0.2), easing: spring({ damping: 50 }) }
      )
    },
    { margin: '-1%', amount: 'all' }
  )
} else {
  //Desktop
  inView(
    'article',
    (info) => {
      animate(
        info.target,
        { y: [80, 0], opacity: [0, 1] },
        { delay: stagger(0.2), easing: spring({ damping: 50 }) }
      )
    },
    { margin: '-30%' }
  )
}

animate(
  '.mockup',
  { y: [0, -10, 0] },
  {
    delay: stagger(0.2),
    duration: 5,
    easing: 'ease-in-out',
    repeat: Infinity,
  }
)

export default function Data() {
  return {
    init() {},
    app: 'Astroweb',
    isMenuOpen: false,
    handelMobileMenu(menu, background) {
      menu.classList.toggle('hidden')
      background.classList.toggle('hidden')

      if (document.body.classList.contains('stop')) {
        document.body.classList.remove('stop')
      } else {
        document.body.classList.add('stop')
      }

      this.isMenuOpen = !this.isMenuOpen
    },
  }
}
