export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    'add'(state, {payload: data}) {
      const tt = {}
      for (const key in data) {
        if (key === 'name') {
          tt[key] = data[key].replace(/([a-zA-Z]*)(\d*)/, (s1,s2,s3) => {
            if (s3) {
              return  `${s2}${Number(s3) + 1}`
            } else {
              return `${s2}1`
            }
          })
        } else {
          tt[key] = data[key] + 1
        }
      }
      
      return state.concat(tt)
    }
  },
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield call(fetch, '/add');
      yield put({ type: 'save' });
    },
  },
};