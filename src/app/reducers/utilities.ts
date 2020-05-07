import { Action } from '@ngrx/store'
import { UtilitiesModel } from '../models/utilities.model'

class ActionModel implements Action {
    type: string
    payload: any
}

enum ActionTypes {
    ShowLoading = 'ShowLoading',
    HideLoading = 'HideLoading',
    ShowToast = 'ShowToast'
}
export class showLoading implements Action {
    readonly type = ActionTypes.ShowLoading
}

export class hideLoading implements Action {
  readonly type = ActionTypes.HideLoading
}
export class showToast implements Action {
  readonly type = ActionTypes.ShowToast

  constructor (public payload: Object) {}
}

const INITIAL_STATE = new UtilitiesModel()

export const reducer = (state = INITIAL_STATE, action: ActionModel) => {
    switch (action.type) {
        case ActionTypes.ShowLoading:
            return { ...state, loading: true }
        case ActionTypes.HideLoading:
          return { ...state, loading: false }
        case ActionTypes.ShowToast:
            return { ...state, toast: action.payload }

        default:
            return state
    }
}
