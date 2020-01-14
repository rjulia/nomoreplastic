import React from 'react'

const Title = ({ h, text }) => {

  const TagName = h || 'h1'
  return (
    <TagName>
      {text}
    </TagName>
  )
}

export default Title
