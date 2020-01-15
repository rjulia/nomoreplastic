import React from 'react';

const EmailIcon = ({ ...restProps }) => (
  <span {...restProps}>
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="10 10 50 40" width={restProps.width} xmlSpace="preserve">
     
     <g  stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <rect  className="stroke-1" strokeWidth="3" x="11" y="16" width="38" height="28"></rect>
        <polyline  className="stroke-1" strokeWidth="3" points="13 18 30 31 47 18"></polyline>
        <path d="M35,28 L47,43"  className="stroke-1" strokeWidth="3"></path>
        <path d="M13,28 L25,43"  className="stroke-1" strokeWidth="3" transform="translate(19.000000, 35.500000) scale(-1, 1) translate(-19.000000, -35.500000) "></path>
    </g>
       
    </svg>
  </span>
);

export default EmailIcon;