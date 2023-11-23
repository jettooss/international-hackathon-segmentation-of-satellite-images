import React from 'react';
import styles from './mapwrapper.module.css';

export const MapWrapper = React.memo(
  () => {
    return <div id='map-container' style={{ width: '100%', height: '100%' }}></div>;
  },
  () => true,
);
