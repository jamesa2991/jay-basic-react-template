import React, { useState } from 'react';
import Help from '~/containers/hooks/help/message';

export default function useHelp(location) {
  const [isVisible, setVisible] = useState(false);

  const content = isVisible ? <Help location={location} /> : null;

  return [isVisible, content, setVisible];
}
