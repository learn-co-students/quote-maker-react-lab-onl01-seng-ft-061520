import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

class Quotes extends Component {
  // renderQuotes = () => this.props.quotes.map((quote, id) => <QuoteCard key={id} content={quote.content} />)

  render() {
    const quoteCards = this.props.quotes.map((quote) => <QuoteCard key={quote.id} quote={quote} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} />)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quoteCards}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {quotes: state.quotes}
}

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
