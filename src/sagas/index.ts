import { productsSaga } from './productSagas'
import { all } from 'redux-saga/effects'

export default function* defaultSaga() {
  yield all([...productsSaga])
}
