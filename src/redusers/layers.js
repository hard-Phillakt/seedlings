
const initState = {
    count: 0,
    layers: [0, 1, 2, 3, 4, 5]
}

const layers = (state = initState, action) => {

    switch (action.type) {
        case 'DELTA_Y':

            const num = action.param;

            if(num === 1){

                if (state.count >= 5) {
                    return {
                        ...state,
                        count: 0
                    }
                }

                return {
                    ...state,
                    count: state.count + 1
                }
            }else {

                if (state.count <= 0) {
                    return {
                        ...state,
                        count: 5
                    }
                }

                return {
                    ...state,
                    count: state.count - 1
                }
            }

        case 'TOGGLE_LAYERS':

            return {
                ...state,
                count: action.param
            }

    }


    return {
        ...state
    }
}

export default layers;