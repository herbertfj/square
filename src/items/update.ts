import {GRAVITY, WIDTH} from '../constants'
import {PegAction, PegActions} from './events'
import {Peg} from './peg'
import {floor, Platform, platforms} from './platform'

export const update = (peg: Peg, pegActions: PegActions, time: number) => {
  peg.x += peg.vx * time
  peg.y += peg.vy * time

  peg.vx = 0

  const foundPlatform = platforms.find(pegIsOnPlatform(peg))

  for (const action of pegActions) {
    switch (action) {
      case PegAction.RIGHT:
        peg.vx += 250
        break
      case PegAction.LEFT:
        peg.vx -= 250
        break
      case PegAction.JUMP:
        if (foundPlatform) {
          peg.vy = -350
        }
        break
    }
  }

  if (foundPlatform) {
      peg.y = foundPlatform.y - peg.h
  } else {
      peg.vy += GRAVITY * time
  }

  if (peg.x < 0) {
    peg.x = 0
  }

  if (peg.x > WIDTH - peg.w) {
    peg.x = WIDTH - peg.w
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
