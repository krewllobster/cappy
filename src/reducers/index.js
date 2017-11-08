import {combineReducers} from 'redux'
import headerReducer from './reducer-header'
import footerReducer from './reducer-footer'

const allReducers = combineReducers({
  header: headerReducer,
  footer: footerReducer,
})

export default allReducers
