import React from 'react'
import PropTypes from 'prop-types';

const Title = ({ tag, text, classN }) => {

  const TagName = tag || 'h1'
  return (
    <TagName className={classN}>
      {text}
    </TagName>
  )
}

Title.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  classN: PropTypes.string
};

export default Title
