/* eslint-disable react/jsx-no-target-blank */

import React from 'react';

function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.pname}</td>
      <td>{`$${product.price}`}</td>
      <td>{product.category}</td>
      <td><a href={`/#/imagedisplay/${product.imageUrl}`}>View</a></td>
    </tr>
  );
}

export default function ProductTable({ products }) {
  // eslint-disable-next-line react/destructuring-assignment
  const productRows = products.map(product => <ProductRow key={product.id} product={product} />);

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>

    </table>
  );
}
