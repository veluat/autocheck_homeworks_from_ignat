import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            return action.payload === 'up' ? [...state.map(el => ({...el})).sort((a, b) => a.name > b.name ? 1 : -1)]
                : action.payload === 'down' ? [...state.map(el => ({...el})).sort((a, b) => a.name < b.name ? 1 : -1)]
                    : [...state] // need to fix
        }
        case 'check': {

            return [...state.map(el => ({...el})).filter(el => el.age >= action.payload)] // need to fix
        }
        default:
            return state
    }
}
