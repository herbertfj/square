import {GRAVITY} from '../constants'
import {PegAction, PegActions} from './events'
import {floor} from './floor'
import {Peg} from './peg'

export const update = (peg: Peg, pegActions: PegActions, time: number) => {
  peg.vx = 0

  for (const action of pegActions) {
    switch (action) {
      case PegAction.RIGHT:
        peg.vx += 250
        break
      case PegAction.LEFT:
        peg.vx -= 250
        break
      case PegAction.JUMP:
        if (peg.y + peg.h === floor.y) {
          peg.vy = -350
        }
        break
    }
  }

  peg.x += peg.vx * time
  peg.y += peg.vy * time

  if (peg.y + peg.h > floor.y) {
    peg.y = floor.y - peg.h
  } else {
    peg.vy += GRAVITY * time
  }
}
