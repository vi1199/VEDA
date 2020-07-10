import { combineReducers } from 'redux';
import { enquiriesList } from './enquiriesList';
import { savedDetails } from './savedDetails';

export default combineReducers({
    enquiries : enquiriesList,
    details  : savedDetails
})
