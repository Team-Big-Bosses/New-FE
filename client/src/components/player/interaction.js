import store from '../../config/store'
import { SPRITE_SIZE } from '../../config/constants'

export default function handleInteraction(direction) {

    function getNewPosition(oldPos, direction) {
        switch(direction) {
            case 'LEFT':
                return [ oldPos[0]-SPRITE_SIZE, oldPos[1] ]
            case 'RIGHT':
                return [ oldPos[0]+SPRITE_SIZE, oldPos[1] ]
            case 'UP':
                return [ oldPos[0], oldPos[1]-SPRITE_SIZE ]
            case 'DOWN':
                return [ oldPos[0], oldPos[1]+SPRITE_SIZE ]
            default:
                return
        }
    }

    function handleInteract(direction) {
        const oldPos = store.getState().player.position
        const newPos = getNewPosition(oldPos, direction)

        const x = newPos[0] / 16
        const y = newPos[1] / 16

        const currentRoom = store.getState().map.currentRoom
        const isShow = store.getState().dialogue.show

        if (isShow) {
            return store.dispatch({
                type: 'SET_CONTEXT',
                payload: {
                    show: false,
                    context: ''
                }
            })
        }

        if (typeof currentRoom.overlay[y][x] ==='string') {
            const nextTile = currentRoom.overlay[y][x]
            const target = nextTile.slice(0, nextTile.indexOf('-'))

            // If the target is one of the interactable objects, handle logic for taking items

            // If target is shopkeeper, handle logic for store

            if (target === 'mushroom' || target === 'stump' || target === 'tree') {
                store.dispatch({
                    type: 'SET_CONTEXT',
                    payload: {
                        show: true,
                        context: target
                    }
                })
            }

            if (target === 'flask') {
                store.dispatch({
                    type: 'SET_CONTEXT',
                    payload: {
                        show: true,
                        context: 'Flask'
                    }
                })
            }
        }
    }

    handleInteract(direction)
}