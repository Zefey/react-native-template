import * as Type from "./type";

export const login = (data : any) => (dispatch : any) => {
  console.log('login action',data);
  /**模拟异步 */
  setTimeout(() => {
    return dispatch({
      type: Type.UPDATE_USER,
      token:'asd1123asdwqe123kl!GHJ@#(&*(#H@KL#@*#()*'
    });
  }, 1000);
}


export const reset = () => (dispatch : any) => {
  console.log('reset action');
  return dispatch({
    type: Type.RESET_USER
  });
}