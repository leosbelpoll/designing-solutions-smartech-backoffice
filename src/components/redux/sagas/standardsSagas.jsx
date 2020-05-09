import { put, call, takeLatest } from "redux-saga/effects";
import { standardTypes } from "../actions/standardsActions";
import apiCall from "utils/api";

export function* getStandards() {
    try {
        const standards = yield call(apiCall, `http://localhost:8000/api/standards`);
        const finalStandards = standards.map(standard => ({
            ...standard,
            trash: () => {
                alert("// TODO: Remove");
            }
        }));
        yield put({
            type: standardTypes.SUCCESS_GETTING_STANDARDS,
            standards: finalStandards
        });
    } catch (error) {
        yield put({
            type: standardTypes.ERROR_GETTING_STANDARDS,
            error
        });
    }
}

export function* getStandard({ id }) {
    try {
        const standard = yield call(apiCall, `http://localhost:8000/api/standards/${id}`);
        yield put({
            type: standardTypes.SUCCESS_GETTING_STANDARD,
            standard
        });
    } catch (error) {
        yield put({
            type: standardTypes.ERROR_GETTING_STANDARD,
            error
        });
    }
}

// Watchers

export default function* standards() {
    yield takeLatest(standardTypes.START_GETTING_STANDARDS, getStandards);
    yield takeLatest(standardTypes.START_GETTING_STANDARD, getStandard);
}
