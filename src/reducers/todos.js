const initialState = {
    data = []
}

const todos = (state = initialState) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {}

        case 'DELETE_TODO':
            return {}

        default:
            return state
    }
}

export default todos