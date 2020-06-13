
const deltaLayer = (param) => {
    return {
        type: "DELTA_Y",
        param: Math.sign(param) 
    }
}

export default deltaLayer;