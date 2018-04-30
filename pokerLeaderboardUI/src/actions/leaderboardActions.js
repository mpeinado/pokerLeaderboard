/**
 * Something happened. That is it. AN annoncement
 * action creator
 */
export const selectPlayer = (player) => {
    // payload can be named anything, payload is standard
    // action
    return {
        type: 'PLAYER_SELECTED',
        payload: player || null
    }
};