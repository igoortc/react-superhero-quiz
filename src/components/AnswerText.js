import React from 'react';
import PropTypes from 'prop-types';

function AnswerText(props) {
  return (
    <li className="answerOption">
      <img src={props.picture} alt="Hero" />
      <input
        type="text"
        value={props.answer}
      />
      <button
        onClick={props.onAnswerSelected}>
        Next
      </button>
    </li>
  );
}

AnswerText.propTypes = {
  picture: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerText;