import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
  return (
    <div className="questionCount">
      Question <span>{props.counter}</span> of <span>{props.total}</span> | {props.score} points
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
};

export default QuestionCount;