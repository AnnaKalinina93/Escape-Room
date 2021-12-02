import browserHistory from '../../browser-history';
import {actionType} from '../action';

export const redirect =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === actionType.redirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
