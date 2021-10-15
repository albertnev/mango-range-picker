import React from 'react';
import { Range } from '../../components/Range';

const Exercise1 = () => (
  <div style={{ padding: 20 }}>
    <Range min={5} max={100} rangeValues={[25, 50, 75, 80, 100]} />
  </div>
);

export default Exercise1;
