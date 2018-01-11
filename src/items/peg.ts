export class Peg {
  public color = 'rgb(124, 2, 0)'
  public w = 20
  public h = 20
  public x = 0
  public y = 0
  public vx = 0
  public vy = 0

  get left() {
    return this.x
  }

  get right() {
    return this.x + this.w
  }

  get top() {
    return this.y
  }

  get bottom() {
    return this.y + this.h
  }
}

export const renderPeg = (peg: Peg, context: CanvasRenderingContext2D) => {
  context.fillStyle = peg.color
  context.fillRect(peg.x, peg.y, peg.w, peg.h)
}
