import {GRAVITY, WIDTH} from '../constants'
import {PegAction, PegActions} from './events'
import {Peg} from './peg'
import {Platform, platforms} from './platform'

export const update = (peg: Peg, pegActions: PegActions, time: number) => {
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
