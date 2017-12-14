import './styles/application.css'

import {renderBackground} from './background'
import {HEIGHT, WIDTH} from './constants'
import {Peg, PegAction} from './peg/peg'

const canvas = document.getElementById('square') as HTMLCanvasElement
canvas.width = WIDTH
canvas.height = HEIGHT

const context = canvas.getContext('2d')

const peg = new Peg(20, HEIGHT - 60, HEIGHT - 40)

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowRight':
      peg.addAction(PegAction.RIGHT)
      break
    case 'ArrowLeft':
      peg.addAction(PegAction.LEFT)
      break
    case 'ArrowUp':
      peg.addAction(PegAction.JUMP)
      break
  }
}, false)

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'ArrowRight':
      peg.removeAction(PegAction.RIGHT)
      break
    case 'ArrowLeft':
      peg.removeAction(PegAction.LEFT)
      break
    case 'ArrowUp':
      peg.removeAction(PegAction.JUMP)
      break
  }
}, false)

let then = Date.now()

const update = () => {
  const now = Date.now()
  const delta = now - then
  const time = delta / 1000

  peg.update(time)

  then = now
}

const render = () => {
  renderBackground(context)

  context.fillStyle = peg.color
  context.fillRect(peg.x, peg.y, peg.w, peg.h)
}

const main = () => {
  update()
  render()

  window.requestAnimationFrame(main)
}

main()
