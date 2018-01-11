import {PegActions} from './events'
import {Hole} from './hole'
import {Peg} from './peg'
import {Platform} from './platform'

export interface GameContext {
  peg: Peg
  pegActions: PegActions
  hole: Hole
  platforms: Platform[]
}
