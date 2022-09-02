import React from 'react';
import { Diggi } from './Details.styled';

const Details = ({ status, premiered, network }) => {
  return (
    <Diggi>
      <p>
        Status: <span>{status}</span>
      </p>
      <p>
        Premiered {premiered} {network ? `on ${network.name}` : null}
      </p>
    </Diggi>
  );
};

export default Details;
