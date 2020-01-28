import React from 'react'
import { truncate } from "../../utils/functions";
const Paragraph = ({ text, tag, classN, isTrucate, characters, href }) => {


  let insertedText;
  const TagName = tag || 'p';

  if (isTrucate) {
    insertedText = truncate(text, characters)
  } else {
    insertedText = text
  }

  if (href) {
    return (
      <TagName className={classN} href={href} target="_blank" rel="noopener noreferrer">
        {insertedText}
      </TagName>
    )
  }
  return (
    <TagName className={classN}>
      {insertedText}
    </TagName>
  )
}

export default Paragraph

