import { put, call, takeLatest } from "redux-saga/effects";
import { projectTypes } from "../actions/projectsActions";
import apiCall from "utils/api";

export function* getProjects() {
    try {
        const projects = yield call(apiCall, `http://localhost:8000/api/projects`);
        const finalProjects = projects.map(project => ({
            ...project,
            trash: () => {
                alert("// TODO: Remove");
            }
        }));
        yield put({
            type: projectTypes.SUCCESS_GETTING_PROJECTS,
            projects: finalProjects
        });
    } catch (error) {
        yield put({
            type: projectTypes.ERROR_GETTING_PROJECTS,
            error
        });
    }
}

export function* getProject({ id }) {
    try {
        const project = yield call(apiCall, `http://localhost:8000/api/projects/${id}`);
        yield put({
            type: projectTypes.SUCCESS_GETTING_PROJECT,
            project
        });
    } catch (error) {
        yield put({
            type: projectTypes.ERROR_GETTING_PROJECT,
            error
        });
    }
}

// Watchers

export default function* projects() {
    yield takeLatest(projectTypes.START_GETTING_PROJECTS, getProjects);
    yield takeLatest(projectTypes.START_GETTING_PROJECT, getProject);
}
