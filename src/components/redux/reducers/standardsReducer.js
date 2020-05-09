import { standardTypes } from "../actions/standardsActions";

const initialState = {
    standards: [],
    loading: false,
    error: null
};

export default function (state = initialState, { type, standards, standard, error }) {
    switch (type) {
        case standardTypes.START_GETTING_STANDARDS:
            return {
                ...state,
                loading: true
            };
        case standardTypes.SUCCESS_GETTING_STANDARDS:
            return {
                ...state,
                loading: false,
                standards: standards,
                error: null
            };
        case standardTypes.ERROR_GETTING_STANDARDS:
            return {
                ...state,
                loading: false,
                error: error
            };
            case standardTypes.START_GETTING_STANDARD:
            return {
                ...state,
                loading: true
            };
        case standardTypes.SUCCESS_GETTING_STANDARD:
            return {
                ...state,
                loading: false,
                standard: standard,
                error: null
            };
        case standardTypes.ERROR_GETTING_STANDARD:
            return {
                ...state,
                loading: false,
                error: error
            };
        default:
            return state;
    }
}
