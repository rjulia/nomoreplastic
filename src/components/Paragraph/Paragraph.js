import React from 'react'
import { truncate } from "../../utils/functions";
const Paragraph = ({ text, tag, classN, isTrucate }) => {


  let insiertText;
  const TagName = tag || 'p';

  if (isTrucate) {
    insiertText = truncate(text)
  } else {
    insiertText = text
  }
  return (
    <TagName className={classN}>
      {insiertText}
    </TagName>
  )
}

export default Paragraph

