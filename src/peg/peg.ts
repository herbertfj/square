import {GRAVITY} from '../constants'

export enum PegAction {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  JUMP = 'JUMP',
}

export class Peg {
  public color: string = 'rgb(124, 2, 0)'
  public w: number = 20
  public h: number = 20
  public x: number
  public y: number

  private velocityX = 0
  private velocityY = 0
  private actions: Set<PegAction> = new Set()

  constructor(private initialX: number,
              private initialY: number,
              private floor: number) {
    this.x = initialX
    this.y = initialY
  }

  get bottom() {
    return this.y + this.h
  }

  public addAction(action: PegAction) {
    this.actions.add(action)
  }

  public removeAction(action: PegAction) {
    this.actions.delete(action)
  }

  public update(time: number) {
    this.handleActions()

    this.x += this.velocityX * time
    this.y += this.velocityY * time
    this.velocityY += GRAVITY * time

    if (this.bottom > this.floor) {
      this.y = this.floor - this.h
      this.velocityY = 0
    }
  }

  private handleActions() {
    this.velocityX = 0

    for (const action of this.actions) {
      switch (action) {
        case PegAction.RIGHT:
          this.velocityX += 250
          break
        case PegAction.LEFT:
          this.velocityX -= 250
          break
        case PegAction.JUMP:
          if (this.bottom === this.floor) {
            this.velocityY = -350
          }
          break
      }
    }
  }
}
