// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return {type: "ADD_QUOTE", quote: quote};
}

export const removeQuote = (id) => {
  return {type: "REMOVE_QUOTE", quoteId: id};
}

export const upvoteQuote = (quote) => {
  return {type: "UPVOTE_QUOTE", quote: quote};
}

export const downvoteQuote = (quote) => {
  return {type: "DOWNVOTE_QUOTE", quote: quote};
}
