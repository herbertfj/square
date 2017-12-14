import {Peg, PegAction} from './peg'

export const registerPegEvents = (peg: Peg) => {
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
}
