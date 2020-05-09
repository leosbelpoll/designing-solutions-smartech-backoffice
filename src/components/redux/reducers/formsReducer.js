import { formTypes } from "../actions/formsActions";

const initialState = {
    forms: [],
    loading: false,
    error: null
};

export default function (state = initialState, { type, forms, form, error }) {
    switch (type) {
        case formTypes.START_GETTING_FORMS:
            return {
                ...state,
                loading: true
            };
        case formTypes.SUCCESS_GETTING_FORMS:
            return {
                ...state,
                loading: false,
                forms: forms,
                error: null
            };
        case formTypes.ERROR_GETTING_FORMS:
            return {
                ...state,
                loading: false,
                error: error
            };
            case formTypes.START_GETTING_FORM:
            return {
                ...state,
                loading: true
            };
        case formTypes.SUCCESS_GETTING_FORM:
            return {
                ...state,
                loading: false,
                form: form,
                error: null
            };
        case formTypes.ERROR_GETTING_FORM:
            return {
                ...state,
                loading: false,
                error: error
            };
        default:
            return state;
    }
}
