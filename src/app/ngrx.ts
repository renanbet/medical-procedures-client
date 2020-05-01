import { Action } from '@ngrx/store'
import { SearchModel } from './models/search.model'

class ActionModel implements Action {
    type: string
    payload: any
}

enum ActionTypes {
    SetSearch = 'SetSearch'
}
export class setSearch implements Action {
    readonly type = ActionTypes.SetSearch

    constructor (public payload: string) {}
}

const INITIAL_STATE = new SearchModel()

export const reducer = (state = INITIAL_STATE, action: ActionModel) => {
    switch (action.type) {
        case ActionTypes.SetSearch:
            return { ...state, search: action.payload }
    
        default:
            return state
    }
}