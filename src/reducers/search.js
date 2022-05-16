
import * as actions from '../actions'

const search = (state='all', action) => {
    // console.log(state)
    // console.log(action)
    switch (action.type) {
        case actions.ACTION_SET_SEARCH: 
            return action.search
        default:
            return state
    }
}

export default search