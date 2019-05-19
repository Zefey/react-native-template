import * as Type from "./type";

export interface UserState {
  token : string;
  username : string;
}

export const login = (data : any) => (dispatch : any) => {

  /**模拟异步 */
  setTimeout(() => {
    /**模拟api返回数据 */
    let resData : UserState = {
      token:'asd1123asdwqe123k123asdwqe',
      username:'Test'
    }
    return dispatch({
      type: Type.UPDATE_USER,
      ...resData
    });
  }, 2000);
  
}


export const reset = () => (dispatch : any) => {
  return dispatch({
    type: Type.RESET_USER
  });
}