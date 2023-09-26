import { useParams } from "react-router-dom";
import {call,put,takeEvery} from "redux-saga/effects";
import { MENU_URL } from "./constants";
import { getRestroSuccess } from "./restroSlice";


function* workGetRestroFetch(){
    // const {resId} = useParams();
    const restroUrl = yield call(()=>fetch(MENU_URL+"355756"));
    const formatRestroUrl = yield restroUrl.json();
    yield put(getRestroSuccess(formatRestroUrl) );
}

function* restroSaga () {
    yield takeEvery("restraurant/getRestroFetch",workGetRestroFetch);
}



export default restroSaga;