import { combineReducers} from 'redux';
import leaderboardReducer from './reducerLeaderboard';
import activePlayerReducer from './activePlayer';


import { routerReducer } from 'react-router-redux';

/** 
 * combine reducers into one object
 * This is how the data will be referenced thoughout the applicaiton
 **/
const allReducers = combineReducers({
    players: leaderboardReducer,
    activePlayer: activePlayerReducer,
    routing: routerReducer
});

export default allReducers;

