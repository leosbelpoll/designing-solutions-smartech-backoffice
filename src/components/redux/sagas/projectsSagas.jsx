import { put, call, takeLatest } from "redux-saga/effects";
import { projectTypes } from "../actions/projectsActions";
import apiCall from "utils/api";

export function* getProjects() {
    try {
        const projects = yield call(apiCall, "/projects");
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
        const project = yield call(apiCall, `/projects/${id}`);
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

export function* createProject({ project }) {
    try {
        yield call(apiCall, "/projects", "POST", project);
        yield put({
            type: projectTypes.SUCCESS_CREATING_PROJECT
        });
    } catch (error) {
        yield put({
            type: projectTypes.ERROR_CREATING_PROJECT,
            error
        });
    }
}

// Watchers

export default function* projects() {
    yield takeLatest(projectTypes.START_GETTING_PROJECTS, getProjects);
    yield takeLatest(projectTypes.START_GETTING_PROJECT, getProject);
    yield takeLatest(projectTypes.START_CREATING_PROJECT, createProject);
}
