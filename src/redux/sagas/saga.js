import { put, takeLatest } from "redux-saga/effects";
// Import all actions
import { LOGIN_REQUEST, SET_LOADING ,LOGIN_SUCCESS} from "../actions";

function* loginRequest({ payload }) {
  yield put({ type: SET_LOADING });
  yield put({ type: LOGIN_SUCCESS, payload });
}

// // create team Details
// function* addTeamData({ payload }) {
//   yield put({ type: CREATE_NEW_TEAM_REQUEST_SUCCESS, payload });
// }

// Export the saga (saga)
export default function* Saga() {
  yield takeLatest(LOGIN_REQUEST, loginRequest);
  // yield takeLatest(CREATE_NEW_TEAM_REQUEST, addTeamData);
}
