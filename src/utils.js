import _ from 'lodash';
import {useState} from 'react';

export const useMergeState = initialState => {
  const [state, setState] = useState(initialState);
  const setMergedState = newState =>
    setState(prevState => {
      const expectedState = _.assign(prevState, newState);
      return {...expectedState};
    });
  return [state, setMergedState];
};
