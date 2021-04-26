import { call, put, takeEvery } from "redux-saga/effects";
import API from "redux-services/api";
import { GetPublicIPSaga, setMyIP } from "redux-services/modules/common";

function* getPublicIpSideEffect({ payload }: ReturnType<GetPublicIPSaga>) {
  const location = payload;

  // Display loading

  try {
    const myIP = yield call(API.common.getCurrentIP, location);

    yield put(setMyIP(myIP));

    //   const data = yield call(API.allData.getPersonRoles);
    //   const roleOptions = getRolesOption(data.roles.role);
  } catch (e) {
    console.log("ERROR");
    // Display error
  } finally {
    // Hide loading
  }
}

export function* getPublicIpWatcher() {
  yield takeEvery("COMMON/GET_PUBLIC_IP_SAGA", getPublicIpSideEffect);
}
