import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        You scored <strong>{props.score}</strong> points!
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Result;