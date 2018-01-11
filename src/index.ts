import './styles/application.css'

import {renderBackground} from './background'
import {HEIGHT, WIDTH} from './constants'
import {PegActions, registerPegEvents} from './items/events'
import {Hole, renderHole} from './items/hole'
import {Peg, renderPeg} from './items/peg'
import {platforms, renderPlatforms} from './items/platform'
import {update} from './items/update'

const canvas = document.getElementById('square') as HTMLCanvasElement
canvas.width = WIDTH
canvas.height = HEIGHT

const context = canvas.getContext('2d')

const peg = new Peg()
peg.x = 20
peg.y = HEIGHT - 60

const hole = new Hole()
hole.randomizeLocation(platforms)

const pegActions: PegActions = new Set()

const render = () => {
  renderBackground(context)
  renderPlatforms(context)
  renderHole(hole, context)
  renderPeg(peg, context)
}

let then = window.performance.now()

const run = (now: number) => {
  const delta = now - then
  const time = delta / 1000

  update({peg, pegActions, hole, platforms}, time)

  then = now

  render()

  window.requestAnimationFrame(run)
}

registerPegEvents(pegActions)
run(then)
