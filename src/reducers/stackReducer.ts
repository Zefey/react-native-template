import { AppRouter } from '../Root';


export default function StackReducer(state:any, action:any) {
    let nextState;
    switch (action.type) {
        default:
            nextState = AppRouter.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}