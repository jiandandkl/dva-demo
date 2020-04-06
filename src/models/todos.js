import { v1 as uuidv1 } from 'uuid';

export default {
  namespace: 'todos',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    'add'(state, {payload: data}) {
      const id = uuidv1()
      return state.concat({id, content: data, completed: false})
    },
    'complete'(state, {payload: id}) {
      return state.map(item => {
        if (item.id === id) {
          return Object.assign({}, item, {completed: !item.completed})
        }
        return item
      })
    }
  },
  effects: {},
};