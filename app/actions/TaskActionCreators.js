import { REQUEST_CREATE_TASK,
         RECEIVE_CREATE_TASK,
         REQUEST_DELETE_TASK,
         RECEIVE_DELETE_TASK,
         REQUEST_TOGGLE_TASK,
         RECEIVE_TOGGLE_TASK } from '../constants';
import KanbanAPI from '../api/KanbanApi';

let TaskActionCreators = {
  addTask(cardId, task) {
    return (dispatch) => {
      dispatch({ type: REQUEST_CREATE_TASK, cardId, task });
      KanbanAPI.addTask(cardId, task).then(
        (receivedNewTask) => dispatch({ type: RECEIVE_CREATE_TASK, success:true, cardId, task: receivedNewTask, temporaryTaskId: task.id }),
        (error) => dispatch({ type: RECEIVE_CREATE_TASK, success:false, cardId, temporaryTaskId: task.id, error })
      )
    };
  },

  deleteTask(cardId, task, taskIndex) {
    return (dispatch) => {
      dispatch({ type: REQUEST_DELETE_TASK, cardId, taskIndex });
      KanbanAPI.deleteTask(cardId, task).then(
        () => dispatch({ type: RECEIVE_DELETE_TASK, success:true, cardId, task, taskIndex }),
        (error) => dispatch({ type: RECEIVE_DELETE_TASK, success:false, cardId, task, taskIndex, error })
      )
    };
  },

  toggleTask(cardId, task, taskIndex) {
    return (dispatch) => {
      dispatch({ type: REQUEST_TOGGLE_TASK, cardId, taskIndex });
      KanbanAPI.toggleTask(cardId, task).then(
        () => dispatch({ type: RECEIVE_TOGGLE_TASK, success:true, cardId, task, taskIndex }),
        (error) => dispatch({ type: RECEIVE_TOGGLE_TASK, success:false, cardId, taskIndex, error })
      )
    };
  }

};

export default TaskActionCreators;
