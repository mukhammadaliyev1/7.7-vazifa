const defaultState = {
    cart: []
}

function cartReducer(state = defaultState, action){
    if(action.type == 'ADD'){
        let copied = [...state.cart]
        copied.push(action.payload)

        return{...state, cart: copied}
    }else if(action.type == 'DELETE'){
        let copied = [...state.cart]
        copied = copied.filter(function(value){
            return value.id != action.payload
        })

        return{...state, cart: copied}

    } else{
        return state;
    }
}

export  default cartReducer