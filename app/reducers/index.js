import { combineReducers } from 'redux';
import cards from './cards';
import cardDraft from './cardDraft';


const rootReducer = combineReducers({
  cards,
  cardDraft,
});

export default rootReducer;
