import React from 'react';
import { Range } from '../../components/Range';

const Exercise1 = () => (
  <div style={{ padding: 20 }}>
    <Range min={5} max={100} minHandlerValue={20} />
  </div>
);

export default Exercise1;
