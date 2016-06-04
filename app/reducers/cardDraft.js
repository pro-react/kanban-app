import {
  CREATE_DRAFT,
  UPDATE_DRAFT
} from '../constants';
import update from 'react-addons-update';

const defaultDraftCard = () => {
  return {
    id: Date.now(),
    title:'',
    description:'',
    status:'todo',
    color:'#c9c9c9',
    tasks:[]
  }
};

const cardDraft = (state = defaultDraftCard(), action) => {
  switch (action.type) {
    case CREATE_DRAFT:
      if(action.card){
        return update(state, {
          $set: action.card
        });
      } else {
        return defaultDraftCard();
      }

    case UPDATE_DRAFT:
      return update(state, {
        [action.field]: {
          $set: action.value
        }
      });

    default:
      return state;
  }
}

export default cardDraft;
