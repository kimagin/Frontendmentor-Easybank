export default function Data() {
  return {
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
