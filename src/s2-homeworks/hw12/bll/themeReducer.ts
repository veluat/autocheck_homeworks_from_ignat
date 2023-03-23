const initState = {
    themeId: 1
}

export type initStateType = typeof initState

export const themeReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export type  ActionType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id}) as const // fix any

