import React from 'react';

const Details = ({ status, premiered, network }) => {
  return (
    <diggi>
      <p>
        Status: <span>{status}</span>
      </p>
      <p>
        Premiered {premiered} {network ? `on ${network.name}` : null}
      </p>
    </diggi>
  );
};

export default Details;
