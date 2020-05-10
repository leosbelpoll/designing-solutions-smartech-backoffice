import { put, call, takeLatest } from "redux-saga/effects";
import { formTypes } from "../actions/formsActions";
import apiCall from "utils/api";

export function* getForms() {
    try {
        const forms = yield call(apiCall, "/forms");
        const finalForms = forms.map(form => ({
            ...form,
            trash: () => {
                alert("// TODO: Remove");
            }
        }));
        yield put({
            type: formTypes.SUCCESS_GETTING_FORMS,
            forms: finalForms
        });
    } catch (error) {
        yield put({
            type: formTypes.ERROR_GETTING_FORMS,
            error
        });
    }
}

export function* getForm({ id }) {
    try {
        const form = yield call(apiCall, `/forms/${id}`);
        yield put({
            type: formTypes.SUCCESS_GETTING_FORM,
            form
        });
    } catch (error) {
        yield put({
            type: formTypes.ERROR_GETTING_FORM,
            error
        });
    }
}

// Watchers

export default function* forms() {
    yield takeLatest(formTypes.START_GETTING_FORMS, getForms);
    yield takeLatest(formTypes.START_GETTING_FORM, getForm);
}
