export enum PegAction {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  JUMP = 'JUMP',
}

export type PegActions = Set<PegAction>

export const registerPegEvents = (pegActions: PegActions) => {
  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowRight':
        pegActions.add(PegAction.RIGHT)
        break
      case 'ArrowLeft':
        pegActions.add(PegAction.LEFT)
        break
      case 'ArrowUp':
        pegActions.add(PegAction.JUMP)
        break
    }
  }, false)

  window.addEventListener('keyup', (e) => {
    switch (e.key) {
      case 'ArrowRight':
        pegActions.delete(PegAction.RIGHT)
        break
      case 'ArrowLeft':
        pegActions.delete(PegAction.LEFT)
        break
      case 'ArrowUp':
        pegActions.delete(PegAction.JUMP)
        break
    }
  }, false)
}
