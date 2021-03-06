import { 
    takeLatest, 
    call, 
    put, 
    all,
    select
  } from 'redux-saga/effects'
import {
      action_type as TYPE
  } from './action'  
  import { push } from 'react-router-redux';   
   
import * as api from '../../../apis/Place'
import * as apiCity from '../../../apis/City'

function* getListCitySaga(action) {
    try {
        const { params } = action
        const response = yield call(apiCity.getList, params)
        if(response.status){
                yield all([
                    put({type: TYPE.GETCITY.SUCCESS, ...response}),
                ])
        }else{
          yield put({type: TYPE.GETCITY.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.GETCITY.ERROR, error})
        ])
    }
}

function* getListSaga(action) {
      try {
          const { params } = action
          const response = yield call(api.getList, params)
          if(response.status){
                  yield all([
                      put({type: TYPE.PLACE.SUCCESS, ...response}),
                  ])
          }else{
            yield put({type: TYPE.PLACE.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.PLACE.ERROR, error})
          ])
      }
  }
  
  function* CreateSaga(action) {
    try {
        const { params } = action
        let data = params
        const response = yield call(api.create, data)
        if(response.status){
                yield all([
                    put({type: TYPE.CREATE.SUCCESS, ...response}),
                    put({type: TYPE.PLACE.REQUEST, params:{isReal:0}})
                ])
        }else{
          yield put({type: TYPE.CREATE.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.CREATE.ERROR, error})
        ])
    }
}

function* UpdateSaga(action) {
    try {
        const { id, data } = action
        const response = yield call(api.update, id, data)
        if(response.status){
                yield all([
                    put({type: TYPE.UPDATE.SUCCESS, ...response}),
                    put({type: TYPE.PLACE.REQUEST, params:{isReal:1}})
                ])
        }else{
          yield put({type: TYPE.UPDATE.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.UPDATE.ERROR, error})
        ])
    }
}

function* DeleteSaga(action) {
    try {
        const { id } = action
        const response = yield call(api.destroy, id)
        if(response.status){
                yield all([
                    put({type: TYPE.DELETE.SUCCESS, ...response}),
                    put({type: TYPE.PLACE.REQUEST, params:{isReal:0}}),
                ])
        }else{
          yield put({type: TYPE.DELETE.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.DELETE.ERROR, error})
        ])
    }
}


  function* watcher() {
      yield all([
          takeLatest(TYPE.PLACE.REQUEST, getListSaga),
          takeLatest(TYPE.CREATE.REQUEST, CreateSaga),
          takeLatest(TYPE.UPDATE.REQUEST, UpdateSaga),
          takeLatest(TYPE.DELETE.REQUEST, DeleteSaga),
          takeLatest(TYPE.GETCITY.REQUEST, getListCitySaga)
      ])
  }
  
  export default watcher