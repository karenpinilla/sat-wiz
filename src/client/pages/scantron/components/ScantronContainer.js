import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnswerOptions from './AnswerOptions'
import { sectionOneKeysSelector, sectionTwoKeysSelector, sectionThreeKeysSelector, sectionFourKeysSelector } from '../selectors';

function ScantronContainer({ sectionOne }) {
  let sectionOneElements = sectionOne.map((key) => <AnswerOptions key={`${key}`} sectionNum={key[0]} questionNum={key[1]} />);
  return (
    <>
      <p>Scantron container</p>
      {sectionOneElements}
    </>
  );
}

const mapStateToProps = store => ({
  sectionOne: sectionOneKeysSelector(store),
});

ScantronContainer.propTypes = {
  sectionOne: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(ScantronContainer);
