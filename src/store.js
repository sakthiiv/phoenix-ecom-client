import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers';
const logger = createLogger();

// Connect our store to the reducers
export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
