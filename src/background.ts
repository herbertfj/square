import {HEIGHT, WIDTH} from './constants'

const background = {
  color: 'rgb(3, 33, 28)',
  h: HEIGHT,
  w: WIDTH,
  x: 0,
  y: 0,
}

const header = {
  color: 'rgb(255, 255, 255)',
  font: '400 25px Roboto',
  text: "Square: Peg's Journey",
  x: 30,
  y: 50,
}

const floor = {
  color: 'rgb(101, 123, 80)',
  h: 40,
  w: WIDTH,
  x: 0,
  y: HEIGHT - 40,
}

export const renderBackground = (context: CanvasRenderingContext2D) => {
  context.fillStyle = background.color
  context.fillRect(background.x, background.y, background.w, background.h)

  context.fillStyle = floor.color
  context.fillRect(floor.x, floor.y, floor.w, floor.h)

  context.fillStyle = header.color
  context.font = header.font
  context.fillText(header.text, header.x, header.y)
}