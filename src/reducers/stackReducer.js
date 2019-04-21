import { MyRouter } from '../Root';

export default function StackReducer(state , action) {
    let nextState;
    switch (action.type) {
        default:
            nextState = MyRouter.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}