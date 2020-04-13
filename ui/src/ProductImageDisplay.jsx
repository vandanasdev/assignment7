import React from 'react';

export default function ProductImageDisplay({ match }) {
  const { imageUrl } = match.params;
  return (
    <div>
      <img src={`${imageUrl}`} alt="Display" />
    </div>

  );
}
