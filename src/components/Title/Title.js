import React from 'react'

const Title = ({ tag, text, classN }) => {

  const TagName = tag || 'h1'
  return (
    <TagName className={classN}>
      {text}
    </TagName>
  )
}

export default Title
