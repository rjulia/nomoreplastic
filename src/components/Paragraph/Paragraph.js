import React from 'react'

const Paragraph = ({ text, tag, classN, sort }) => {

  const TagName = tag || 'p'
  return (
    <TagName className={classN}>
      {text}
    </TagName>
  )
}

export default Paragraph
