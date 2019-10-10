import React, { useState } from 'react';
import honkify from 'honkify';
const Honker = () => {
  const initialState = { active: false, unregister: () => {} };
  const [honk, setHonk] = useState(initialState);
  const toggleHonk = () => {
    if (!honk.active) {
      const unregister = honkify();
      setHonk({ active: true, unregister });
    }
    if (honk.active) {
      honk.unregister();
      setHonk(initialState);
    }
  };
  return (
    <button onClick={toggleHonk}>{honk.active ? 'unhonk' : 'honk!'}</button>
  );
};
export default Honker;
