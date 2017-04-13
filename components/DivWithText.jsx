import React from 'react';

require('./DivWithText.scss');

const DivWithTextExamples = ({ text }) => (
    <div className="div-with-text">
        {text}
    </div>
);

DivWithTextExamples.propTypes = {
    text: React.PropTypes.string.isRequired
};

export default DivWithTextExamples;
