import { animate, stagger, inView, spring } from 'motion'

document.querySelectorAll('article').forEach((article) => {
  article.style.opacity = '0'
})

if (window.innerWidth >= 768) {
  //Desktop
  inView(
    'article',
    (info) => {
      animate(
        'article',
        { y: [80, 0], opacity: [0, 1] },
        { delay: stagger(0.3), easing: spring() }
      )
    },
    { margin: '-30%' }
  )
} else {
  //Mobile
  inView(
    'article',
    (info) => {
      animate(
        info.target,
        { y: [80, 0], opacity: [0, 1] },
        { delay: stagger(0.3), easing: spring({ damping: 50 }) }
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
    init() {
      this.$watch('isMenuOpen', (e) => {
        if (e) {
          document.body.classList.add('stop')
        } else {
          document.body.classList.remove('stop')
        }
      })
    },
    app: 'Astroweb',
    isMenuOpen: false,
    handelMobileMenu(menu, background) {
      // menu.classList.toggle('hidden')
      // background.classList.toggle('hidden')

      this.isMenuOpen = !this.isMenuOpen
    },
  }
}
