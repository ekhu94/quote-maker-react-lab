import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  renderQuotes = () => {
    const {quotes, removeQuote, upvoteQuote, downvoteQuote} = this.props;
    return quotes.map(q => {
      return (
        <QuoteCard
          key={q.id}
          quote={q}
          removeQuote={removeQuote}
          upvoteQuote={upvoteQuote}
          downvoteQuote={downvoteQuote}
        />
      );
    });
  }

  render() {
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
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
}

//add arguments to connect as needed
export default connect(mapStateToProps, {
  removeQuote, upvoteQuote, downvoteQuote
})(Quotes);
