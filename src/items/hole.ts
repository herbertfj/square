import {Platform} from './platform'

export class Hole {
  public color = 'rgb(124, 2, 0)'
  public r = 10
  public x = 0
  public y = 0

  get left() {
    return this.x - this.r
  }

  get right() {
    return this.x + this.r
  }

  get top() {
    return this.y - this.r
  }

  get bottom() {
    return this.y + this.r
  }

  public randomizeLocation(platforms: Platform[]) {
    const platform = platforms[Math.floor(Math.random() * platforms.length)]

    this.x = (platform.x + platform.x + platform.w) / 2
    this.y = (platform.y - this.r)
  }
}

export const renderHole = (hole: Hole, context: CanvasRenderingContext2D) => {
  context.beginPath()
  context.arc(hole.x, hole.y, hole.r, 0, 2 * Math.PI)
  context.fillStyle = hole.color
  context.fill()
  context.closePath()
}
