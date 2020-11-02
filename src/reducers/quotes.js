export default (state = [], action) => {
  switch(action.type){
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(q => q.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      return [{...action.quote, votes: action.quote.votes + 1}];
    case "DOWNVOTE_QUOTE":
      return [{...action.quote, votes: action.quote.votes - 1}];
    default:
      return state;
  }
}
