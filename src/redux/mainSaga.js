import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth177660Saga from '../features/EmailAuth177660/redux/sagas';
import CalendarView177658Saga from '../features/CalendarView177658/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth177660Saga,
CalendarView177658Saga,
    
  ]);
}