import {Peg, PegAction} from './peg'

describe('Peg', () => {
  let peg: Peg
  const initialX = 5
  const initialY = 10
  const floor = 30

  beforeEach(() => {
    peg = new Peg(initialX, initialY, floor)
  })

  describe('when initialized', () => {
    it('should be positioned according to initial values', () => {
      expect(peg.x).toBe(initialX)
      expect(peg.y).toBe(initialY)
    })
  })

  describe('when updated', () => {
    const time = 0.015

    describe('with no actions', () => {
      beforeEach(() => {
        peg.update(time)
      })

      it('should not move', () => {
        expect(peg.x).toBe(initialX)
        expect(peg.y).toBe(initialY)
      })
    })

    describe('when moved right', () => {
      beforeEach(() => {
        peg.addAction(PegAction.RIGHT)
        peg.update(time)
      })

      it('should move to the right', () => {
        expect(peg.x).toBeGreaterThan(initialX)
      })
    })

    describe('when moved left', () => {
      beforeEach(() => {
        peg.addAction(PegAction.LEFT)
        peg.update(time)
      })

      it('should move to the right', () => {
        expect(peg.x).toBeLessThan(initialX)
      })
    })
  })
})
