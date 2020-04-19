import React from 'react'
import { truncate } from "../../utils/functions";
import variables from '../../scss/variables.scss';
import styled from 'styled-components';

const Paragraph = ({ text, tag, classN, isTrucate, characters, href, size = 16, children }) => {

  let insertedText;
  const TagName = tag || 'p';

  const Content = styled(TagName)`
    color: ${variables.text_gray};
    font-size: ${size}px;
    margin: 1rem 0;
    font-family: ${variables.outstanding};
    font-weight: 300
  `;

  if (isTrucate) {
    insertedText = truncate(text, characters)
  } else {
    insertedText = text
  }
  function createMarkup() {
    return { __html: insertedText };
  }

  if (href) {
    return (
      <TagName className={classN} href={href} target="_blank" rel="noopener noreferrer">
        {insertedText}
      </TagName>
    )
  }
  if (children) {
    return (
      <Content className={classN} >
        {children} {text}
      </Content>
    )
  }
  return (
    <Content className={classN} dangerouslySetInnerHTML={createMarkup()} />
  )
}

export default Paragraph

