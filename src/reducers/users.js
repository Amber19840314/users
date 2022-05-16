
import * as actions from '../actions'
let ID_SEED = 1

const users = (state=[{id: 0, firstName: 'John', lastName: 'Sun', sex: 'male', age: 34, password: '123', password2: '123'}], action) => {
    // console.log(state)
    // console.log(action)
    switch (action.type) {
        case actions.ACTION_ADDUSER: 
            return [
                ...state,
                {
                    id: ID_SEED++,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    sex: action.sex,
                    age: action.age,
                    password: action.password, 
                    password2: action.password2
                    
                }
            ]
        case actions.ACTION_EDIT_USER:
            return state.map(todo => {
                        if (todo.id !== action.id) {
                            return todo
                        }
                        else {
                            return {
                                ...todo,
                                firstName: action.firstName,
                                lastName: action.lastName,
                                sex: action.sex,
                                age: action.age,
                                password: action.password, 
                                password2: action.password2
                            }
                        }
                    }
                )
        default:
            return state
    }
}

export default users