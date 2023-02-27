import createStore from 'react-rxjs-state-management';

const pageName = {
  name: 'pageName',
  defaultState: '',
  setter(state, payload) {
    return payload;
  },
};

export default createStore([pageName]);
