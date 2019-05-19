import * as Type from '../actions/type';

const defaultState = {
  isLogin: false,
  token:''
}


export default (state = defaultState, action:any) => {
  switch (action.type) {
    case Type.UPDATE_USER:
      return {
        ...state,
        isLogin: true,
        token:action.token
      }
    case Type.RESET_USER:
      return defaultState;
    default:
      return state;
  }
}
