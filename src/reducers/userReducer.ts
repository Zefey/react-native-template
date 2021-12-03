import * as Type from '../actions/type';
import { UserState } from '../actions/user';

const defaultState: UserState = {
    username: '',
    token: '',
};

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case Type.UPDATE_USER:
            return {
                ...state,
                username: action.username,
                token: action.token,
            };
        case Type.RESET_USER:
            return defaultState;
        default:
            return state;
    }
};
