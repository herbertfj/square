import './styles/application.css'

import {renderBackground} from './background'
import {HEIGHT, WIDTH} from './constants'
import {registerPegEvents} from './peg/events'
import {Peg} from './peg/peg'

const canvas = document.getElementById('square') as HTMLCanvasElement
canvas.width = WIDTH
canvas.height = HEIGHT

const context = canvas.getContext('2d')

const peg = new Peg(20, HEIGHT - 60, HEIGHT - 40)

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

const run = () => {
  update()
  render()

  window.requestAnimationFrame(run)
}

registerPegEvents(peg)
run()
