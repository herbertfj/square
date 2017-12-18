import {HEIGHT} from '../constants'
import {PegAction, PegActions} from './events'
import {Peg} from './peg'
import {update} from './update'

describe('update', () => {
  let peg: Peg
  let pegActions: PegActions
  const initialX = 20
  const initialY = HEIGHT - 60
  const time = 0.015

  beforeEach(() => {
    peg = new Peg()
    peg.x = initialX
    peg.y = initialY

    pegActions = new Set()

    update(peg, pegActions, time)
  })

  describe('when initialized', () => {
    it('should be positioned according to initial values', () => {
      expect(peg.x).toBe(initialX)
      expect(peg.y).toBe(initialY)
    })
  })

  describe('when updated', () => {
    describe('with no actions', () => {
      beforeEach(() => {
        update(peg, pegActions, time)
      })

      it('should not move', () => {
        expect(peg.x).toBe(initialX)
        expect(peg.y).toBe(initialY)
      })
    })

    describe('when moved right', () => {
      beforeEach(() => {
        pegActions.add(PegAction.RIGHT)

        update(peg, pegActions, time)
      })

      it('should move to the right', () => {
        expect(peg.x).toBeGreaterThan(initialX)
      })
    })

    describe('when moved left', () => {
      beforeEach(() => {
        pegActions.add(PegAction.LEFT)

        update(peg, pegActions, time)
      })

      it('should move to the right', () => {
        expect(peg.x).toBeLessThan(initialX)
      })
    })
  })
})
