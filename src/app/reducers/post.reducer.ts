import * as PostActions from '../actions/post.actions';
import { Post }         from '../models/post.model'

export type Action = PostActions.All;

const defaultState: Post = {
  text: 'Hello. I am the default post',
  likes: 0
}

const newState = (state, newData) => {
  return Object.assign({}, state, newData)
}

export function postReducer(state: Post = defaultState, action: Action) {
  console.log(action.type, state)

	switch (action.type) {
  		case 'Edit':
  			return newState(state, { text: action.payload });

      case 'Upvote':
        return newState(state, { likes: state.likes + 1 });

  		case 'Downvote':
  			return newState(state, { likes: state.likes - 1 });

  		case 'Reset':
  			return defaultState;

  		default:
  			return state;

	}
}
