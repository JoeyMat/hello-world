import { MenuClick } from '../menu/Actions'

const initialState = {
    menuClick: ''
}
function menuStateHandler(state = initialState, action){
 switch (action.type) {
     case MenuClick: 
        return { ...state, menuClick: action.text }

     default: 
        return state
 }
}

export default function destroySite(state = {}, action) {
    return {
        menuStateHandler: menuStateHandler(state.menuStateHandler, action),
    }
  }