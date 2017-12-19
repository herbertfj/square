import {HEIGHT, WIDTH} from '../constants'

export class Platform {
  public color = 'rgb(101, 123, 80)'

  constructor(public x: number,
              public y: number,
              public w: number,
              public h: number = 20) {
  }
}

export const floor = new Platform(0, HEIGHT - 40, WIDTH, 40)

export const platforms: Platform[] = [
  floor,
  new Platform(100, HEIGHT - 100, 50, 20),
]

export const renderPlatforms = (context: CanvasRenderingContext2D) => {
  platforms.forEach((platform) => {
    context.fillStyle = platform.color
    context.fillRect(platform.x, platform.y, platform.w, platform.h)
  })
}
