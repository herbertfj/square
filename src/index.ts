import './styles/application.css'

import {renderBackground} from './background'
import {HEIGHT, WIDTH} from './constants'
import {PegActions, registerPegEvents} from './items/events'
import {Peg} from './items/peg'
import {update} from './items/update'

const canvas = document.getElementById('square') as HTMLCanvasElement
canvas.width = WIDTH
canvas.height = HEIGHT

const context = canvas.getContext('2d')

const peg = new Peg()
peg.x = 20
peg.y = HEIGHT - 60

const pegActions: PegActions = new Set()

const render = () => {
  renderBackground(context)

  context.fillStyle = peg.color
  context.fillRect(peg.x, peg.y, peg.w, peg.h)
}

let then = window.performance.now()

const run = (now: number) => {
  const delta = now - then
  const time = delta / 1000

  update(peg, pegActions, time)

  then = now

  render()

  window.requestAnimationFrame(run)
}

registerPegEvents(pegActions)
run(then)
