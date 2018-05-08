import { put, takeLatest } from "redux-saga/effects";
import * as actionCreators from "../actionCreators";
import { GET_PRODUCTS } from "../actionTypes";
import apiBaseURI from "../common/helpers";

function* getProducts() {
  try {
    let products = yield fetch(`${apiBaseURI}/text/tamil-rc/old`)
    .then(r =>
        r.json()
    );
    yield put(actionCreators.getProductsSuccessActionCreator(products));
  } catch (error) {
    yield put(actionCreators.getProductsFailureActionCreator(error));
  }
}

export function* getProductsWatcher() {
  yield takeLatest(GET_PRODUCTS, getProducts);
}
