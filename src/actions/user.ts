import * as Type from './type';

export interface UserState {
    token: string;
    username: string;
}

export const login = (data: any, callback: object) => (dispatch: any) => {
    /**模拟异步 */
    setTimeout(() => {
        /**模拟api返回数据 */
        let resData: UserState = {
            token: Math.random().toString(12).substr(2),
            username: 'Zefey',
        };
        typeof callback === 'function' && callback(resData);
        return dispatch({
            type: Type.UPDATE_USER,
            ...resData,
        });
    }, 1000);
};

export const reset = () => (dispatch: any) => {
    return dispatch({
        type: Type.RESET_USER,
    });
};
