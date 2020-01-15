import React from 'react';

const AddIcon = ({ ...restProps }) => (
  <span {...restProps}>
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="10 10 50 40" width={restProps.width} xmlSpace="preserve">
    
    <g  stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <circle id="Oval" className="stroke-1" strokeWidth="3" cx="30" cy="30" r="16"></circle>
        <path d="M35,30 L25,30" id="Path-14" className="stroke-1" strokeWidth="3"></path>
        <path d="M30,25 L30,35" id="Path-14" className="stroke-1" strokeWidth="3"></path>
    </g>
    
    </svg>
  </span>
);

export default AddIcon;