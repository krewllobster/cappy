


const footerReducer = (state = {default: 'goodbye'}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state;
    case 'DECREMENT':
      return state;
    default:
      return state;
  }
}

export default footerReducer
