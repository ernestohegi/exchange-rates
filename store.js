import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
    currency: 'GBP'
}

export const actionTypes = {
    SET_CURRENCY_GBP: 'SET_CURRENCY_GBP',
    SET_CURRENCY_EUR: 'SET_CURRENCY_EUR',
    SET_CURRENCY_USD: 'SET_CURRENCY_USD'
}

const reducer = (state = exampleInitialState, action) => {
    let newState = state;

    switch (action.type) {
        case actionTypes.SET_CURRENCY_GBP:
            newState = Object.assign(
                {},
                state,
                {
                    currency: 'GBP'
                }
            );
            break;
        case actionTypes.SET_CURRENCY_EUR:
            newState = Object.assign(
                {},
                state,
                {
                    currency: 'EUR'
                }
            );
            break;
        case actionTypes.SET_CURRENCY_USD:
            newState = Object.assign(
                {},
                state,
                {
                    currency: 'USD'
                }
            );
            break;
        default:
            exampleInitialState
    }

    return newState;
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
