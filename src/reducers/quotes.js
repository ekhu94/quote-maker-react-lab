export default (state = [], action) => {
  if (action.type === 'ADD_QUOTE') {
    return [...state, action.quote];
  }
  if (action.type === 'REMOVE_QUOTE') {
    return state.filter(s => s.id !== action.quoteId);
  }
  if (action.type === 'UPVOTE_QUOTE') {
    const quote = state.find(q => q.id === action.quoteId);
    return [
      ...state.slice(0, state.indexOf(quote)),
      Object.assign({}, quote, { votes: quote.votes += 1 }),
      ...state.slice(state.indexOf(quote) + 1)
    ];
  }
  if (action.type === 'DOWNVOTE_QUOTE') {
    const quote = state.find(q => q.id === action.quoteId);
    if (quote.votes > 0) {
      return [
        ...state.slice(0, state.indexOf(quote)),
        Object.assign({}, quote, { votes: quote.votes -= 1 }),
        ...state.slice(state.indexOf(quote) + 1)
      ];
    }
  }
  return state;
}
