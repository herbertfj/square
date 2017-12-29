import {HEIGHT, WIDTH} from '../constants'

export class Platform {
  public color = 'rgb(101, 123, 80)'

  constructor(public x: number,
              public y: number,
              public w: number = 50,
              public h: number = 20) {
  }
}

const floor = new Platform(0, HEIGHT - 40, WIDTH, 40)

export const platforms: Platform[] = [
  floor,
  new Platform(100, HEIGHT - 100),
  new Platform(200, HEIGHT - 160),
  new Platform(400, HEIGHT - 160),
  new Platform(100, HEIGHT - 220),
  new Platform(300, HEIGHT - 220),
  new Platform(200, HEIGHT - 280),
  new Platform(400, HEIGHT - 340),
  new Platform(300, HEIGHT - 340),
  new Platform(350, HEIGHT - 400),
]

export const renderPlatforms = (context: CanvasRenderingContext2D) => {
  platforms.forEach((platform) => {
    context.fillStyle = platform.color
    context.fillRect(platform.x, platform.y, platform.w, platform.h)
  })
}
