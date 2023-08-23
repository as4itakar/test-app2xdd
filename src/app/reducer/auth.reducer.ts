import { Action } from '@ngrx/store'

export function AuthReducer( state: boolean = false, action: Action){

    console.log(action.type, state);

    switch (action.type) {
        case('SUBMIT'):
            return state = true
        case('OUT'):
            return state = false
        default:
            return state
    }
}