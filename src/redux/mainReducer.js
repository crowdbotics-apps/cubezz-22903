import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth177660Reducer from '../features/EmailAuth177660/redux/reducers';
import CalendarView177658Reducer from '../features/CalendarView177658/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth177660: EmailAuth177660Reducer,
CalendarView177658: CalendarView177658Reducer,

});