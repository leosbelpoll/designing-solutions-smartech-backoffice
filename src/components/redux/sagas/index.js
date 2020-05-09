import { all } from "redux-saga/effects";

import projects from "./projectsSagas";
import forms from "./formsSagas";
import standards from "./standardsSagas";

export default function* rootSaga() {
    yield all([
        projects(),
        forms(),
        standards()
    ]);
}
