import {GRAVITY, WIDTH} from '../constants'
import {PegAction} from './events'
import {GameContext} from './game-context'
import {Peg} from './peg'
import {Platform} from './platform'

export const update = (gameContext: GameContext, time: number) => {
  const {peg, pegActions, platforms, hole} = gameContext

  if (gotHole(gameContext)) {
    hole.randomizeLocation(platforms)
  }

  peg.x += peg.vx * time

  peg.vx = 0

  if (pegActions.has(PegAction.RIGHT)) {
    peg.vx += 250
  }

  if (pegActions.has(PegAction.LEFT)) {
    peg.vx -= 250
  }

  if (peg.x < 0) {
    peg.x = 0
  }

  if (peg.x > WIDTH - peg.w) {
    peg.x = WIDTH - peg.w
  }

  const foundPlatform = platforms.find(pegIsOnPlatform(peg))

  if (!foundPlatform) {
    peg.vy += GRAVITY * time // come back to this
    peg.y += peg.vy * time
  } else {
    peg.vy = 0
    peg.y = foundPlatform.y - peg.h

    if (pegActions.has(PegAction.JUMP)) {
      peg.vy = -500
      peg.y += peg.vy * time
    }
  }
}

const pegIsOnPlatform = (peg: Peg) => (platform: Platform) =>
  pegIsHorizontallyOnPlatform(peg, platform) && pegFellOnPlatform(peg, platform)

const pegIsHorizontallyOnPlatform = (peg: Peg, platform: Platform) => {
  return (peg.x <= platform.x && peg.x + peg.w > platform.x) ||
    (peg.x >= platform.x && peg.x + peg.w <= platform.x + platform.w) ||
    (peg.x < platform.x + platform.w && peg.x + peg.w >= platform.x + platform.w)
}

const pegFellOnPlatform = (peg: Peg, platform: Platform) => {
  return peg.vy >= 0 && peg.y < platform.y && peg.y + peg.h >= platform.y
}

const gotHole = ({peg, hole}: GameContext) => {
  return ((peg.left >= hole.left && peg.left <= hole.right) ||
    (peg.right >= hole.left && peg.right <= hole.right)) &&
    ((peg.top >= hole.top && peg.top <= hole.bottom) ||
      (peg.bottom >= hole.top && peg.bottom <= hole.bottom))
}
