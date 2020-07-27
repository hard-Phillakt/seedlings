import validator from 'validator';

const initToggleComp = {
    view: false,
    phoneView: true,
    formView: false,
    successView: false,
    viewBox: 'phone',
    phoneBox: {},
    formView: {}
}

const modal = (state = initToggleComp, action) => {

    switch (action.type) {
        case 'MODAL_VIEW':

            if (state.view) {
                state.view = false
            } else {
                state.view = true
            }

            return {
                ...state,
                view: state.view
            }


        case 'TOGGLE_COMP_MODAL':


            switch (action.param) {
                case 'phone':

                    state.viewBox = 'phone'
                    // state.phoneView = false
                    // state.formView = false
                    // state.successView = false

                    return {
                        ...state,
                        phoneBox: {},
                        formBox: {}
                    }

                case 'form':

                    state.viewBox = 'form'
                    // state.phoneView = false
                    // state.formView = 'form'
                    // state.successView = false

                    return {
                        ...state,
                        phoneBox: {},
                        formBox: {}
                    }


                case 'success':

                    state.viewBox = 'success'
                    // state.phoneView = false
                    // state.formView = false
                    // state.successView = 'success'

                    return {
                        ...state,
                        phoneBox: {},
                        formBox: {}
                    }

            }


        case 'CHANGE_INPUT':

            switch (action.name) {
                case 'phone-name':

                    const phoneName = validator.isLength(action.value, { min: 2, max: 10 });

                    if (phoneName) {
                        return {
                            ...state,
                            phoneBox: { ...state.phoneBox, name: action.value }
                        }
                    } else {
                        return {
                            ...state,
                            phoneBox: { ...state.phoneBox, name: '' }
                        }
                    }



                case 'phone-tel':

                    //  Валидация данных
                    const phoneTel = validator.isMobilePhone(action.value, 'any');

                    if (phoneTel) {
                        return {
                            ...state,
                            phoneBox: { ...state.phoneBox, tel: action.value }
                        }
                    } else {
                        return {
                            ...state,
                            phoneBox: { ...state.phoneBox, tel: '' }
                        }
                    }



                //  Form
                case 'form-name':

                    const formName = validator.isLength(action.value, { min: 2, max: 10 });

                    if (formName) {
                        return {
                            ...state,
                            formBox: { ...state.formBox, name: action.value }
                        }
                    } else {
                        return {
                            ...state,
                            formBox: { ...state.formBox, name: '' }
                        }
                    }



                case 'form-tel':

                    //  Валидация данных
                    const formTel = validator.isMobilePhone(action.value, 'any');

                    if (formTel) {
                        return {
                            ...state,
                            formBox: { ...state.formBox, tel: action.value }
                        }
                    } else {
                        return {
                            ...state,
                            formBox: { ...state.formBox, tel: '' }
                        }
                    }



                case 'form-email':

                    //  Валидация данных
                    const formEmail = validator.isEmail(action.value);

                    if (formEmail) {
                        return {
                            ...state,
                            formBox: { ...state.formBox, email: action.value }
                        }
                    } else {
                        return {
                            ...state,
                            formBox: { ...state.formBox, email: '' }
                        }
                    }


                case 'form-comment':

                    const formComment = validator.isLength(action.value, { min: 2, max: 1000 });

                    if (formComment) {
                        return {
                            ...state,
                            formBox: { ...state.formBox, comment: action.value }
                        }
                    } else {
                        return {
                            ...state,
                            formBox: { ...state.formBox, comment: '' }
                        }
                    }
            }


            return {
                ...state
            }


        case 'CLEAR_FORM':

            state.viewBox = 'success'

            return {
                ...state,
                phoneBox: {},
                formBox: {}
            }


        default:
            return {
                ...state
            }
    }
}

export default modal;