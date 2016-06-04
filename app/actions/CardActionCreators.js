import {
  REQUEST_CARDS,
  RECEIVE_CARDS,
  REQUEST_CREATE_CARD,
  RECEIVE_CREATE_CARD,
  TOGGLE_CARD_DETAILS,
  REQUEST_UPDATE_CARD,
  RECEIVE_UPDATE_CARD,
  UPDATE_CARD_POSITION,
  UPDATE_CARD_STATUS,
  REQUEST_PERSIST_CARD_DRAG,
  RECEIVE_PERSIST_CARD_DRAG,
  CREATE_DRAFT,
  UPDATE_DRAFT,
} from '../constants';

import KanbanAPI from '../api/KanbanApi';
import {throttle} from '../utils';
import {getCard, getCardIndex} from '../reducers';

let CardActionCreators = {
  fetchCards() {
    return (dispatch) => {
      dispatch({ type: REQUEST_CARDS });
      KanbanAPI.fetchCards().then(
        (cards) => dispatch({ type: RECEIVE_CARDS, success:true, cards }),
        (error) => dispatch({ type: RECEIVE_CARDS, success:false, error })
      );
    };
  },

  toggleCardDetails(cardId) {
    return { type: TOGGLE_CARD_DETAILS, cardId };
  },

  addCard(card) {
    return (dispatch) => {
      dispatch({ type: REQUEST_CREATE_CARD, card });
      KanbanAPI.addCard(card).then(
        (receivedNewCard) => dispatch({ type: RECEIVE_CREATE_CARD, success:true, card: receivedNewCard }),
        (error) => dispatch({ type: RECEIVE_CREATE_CARD, success:false, card, error })
      );
    };
  },


  updateCard(card, cardDraft) {
    return (dispatch) => {
      dispatch({ type: REQUEST_UPDATE_CARD, card:cardDraft });
      KanbanAPI.updateCard(card, cardDraft).then(
        (receivedUpdatedCard) => dispatch({ type: RECEIVE_UPDATE_CARD, success:true, card:receivedUpdatedCard }),
        (error) => dispatch({ type: RECEIVE_UPDATE_CARD, success:false, card, error })
      )
    };
  },

  _updateCardStatus: throttle((dispatch, cardId, listId) => {
    dispatch({ type: UPDATE_CARD_STATUS, cardId, listId });
  }),

  updateCardStatus(cardId, listId) {
    return (dispatch) => this._updateCardStatus(dispatch, cardId, listId);
  },

  _updateCardPosition: throttle((dispatch, cardId, afterId) => {
    dispatch({ type: UPDATE_CARD_POSITION, cardId, afterId });
  }, 500),

  updateCardPosition(cardId, afterId) {
    return (dispatch) => this._updateCardPosition(dispatch, cardId, afterId);
  },

  persistCardDrag(cardProps) {
    return (dispatch, getState) => {
      const state = getState();
      const card = getCard(state, cardProps.id);
      const cardIndex = getCardIndex(state, cardProps.id);
      dispatch({ type: REQUEST_PERSIST_CARD_DRAG });
      KanbanAPI.persistCardDrag(card.id, card.status, cardIndex).then(
        () => dispatch({ type: RECEIVE_PERSIST_CARD_DRAG, success:true, cardProps }),
        (error) => dispatch({ type: RECEIVE_PERSIST_CARD_DRAG, success:false, cardProps, error })
      );
    }
  },


  toggleCardDetails(cardId) {
    return { type: TOGGLE_CARD_DETAILS, cardId };
  },

  createDraft(card) {
    return { type: CREATE_DRAFT, card };
  },

  updateDraft(field, value) {
    return { type: UPDATE_DRAFT, field, value };
  }

};

export default CardActionCreators;
