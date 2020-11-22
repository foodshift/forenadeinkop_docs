import * as React from 'react';
import isAbsoluteUrl from 'is-absolute-url';
import { Link as GatsbyLink } from 'gatsby';

const AnchorTag = ({ children: link, ...props }) => {
  if (link) {
    if (isAbsoluteUrl(props.href)) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      );
    }
    return (
      <GatsbyLink to={props.href} {...props}>
        {link}
      </GatsbyLink>
    );
  } else {
    return null;
  }
};

export default AnchorTag;
