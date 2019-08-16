import React from 'react';
import { TOP_LOCATION } from '~/constants/hooks';
import Help from '~/containers/hooks/help';

export default function Top() {
  return (
    <div className="top-content">
      <h1> Top Title </h1>
      <p> Top Area </p>
      <Help location={TOP_LOCATION} />
    </div>
  );
}
