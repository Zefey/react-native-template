import * as Type from '../actions/type';
// 原始默认state
const defaultState = {
  isLogin: false,
  token:''
}


export default (state = defaultState, action) => {
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
