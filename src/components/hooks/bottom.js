import React from 'react';
import { BOTTOM_LOCATION } from '~/constants/help';
import Help from '~/containers/help';

export default function Bottom() {
  return (
    <div className="bottom-content">
      <h1> Bottom Title </h1>
      <p> Bottom Area </p>
      <Help location={BOTTOM_LOCATION} />
    </div>
  );
}
