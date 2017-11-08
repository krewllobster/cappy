


const headerReducer = (state = {default: 'hello'}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state;
    case 'DECREMENT':
      return state;
    default:
      return state;
  }
}

export default headerReducer
