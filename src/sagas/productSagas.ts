import { takeEvery, fork, put, call } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from '../actions'

function* getProducts() {
  const { data } = yield call(axios.get, 'https://localhost:7198/api/Catalog')
  yield put(actions.getProductsSuccess(data))
}

function* watchReadProducts() {
  yield takeEvery(actions.types.GET_PRODUCTS_REQUEST, getProducts)
}

export const productsSaga = [fork(watchReadProducts)]
