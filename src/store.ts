import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import defaultSaga from './sagas'
import { composeWithDevTools } from '@redux-devtools/extension'

const sagaMiddleWare = createSagaMiddleware()
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
)
sagaMiddleWare.run(defaultSaga)

export default store
