import { projectTypes } from "../actions/projectsActions";

const initialState = {
    projects: [],
    loading: false,
    error: null
};

export default function (state = initialState, { type, projects, project, error }) {
    switch (type) {
        case projectTypes.START_GETTING_PROJECTS:
            return {
                ...state,
                loading: true
            };
        case projectTypes.SUCCESS_GETTING_PROJECTS:
            return {
                ...state,
                loading: false,
                projects: projects,
                error: null
            };
        case projectTypes.ERROR_GETTING_PROJECTS:
            return {
                ...state,
                loading: false,
                error: error
            };
            case projectTypes.START_GETTING_PROJECT:
            return {
                ...state,
                loading: true
            };
        case projectTypes.SUCCESS_GETTING_PROJECT:
            return {
                ...state,
                loading: false,
                project: project,
                error: null
            };
        case projectTypes.ERROR_GETTING_PROJECT:
            return {
                ...state,
                loading: false,
                error: error
            };
        default:
            return state;
    }
}
