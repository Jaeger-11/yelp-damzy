import { InitialStateType, ActionType } from "./interface"

const Reducer = (state: InitialStateType, action: ActionType) : InitialStateType => {
  switch(action.type){
    case 'RESET':
      return {...state, user: "", uid:""}
    
    default: return state
  }
}

export default Reducer