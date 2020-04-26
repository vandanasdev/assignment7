/* eslint-disable react/jsx-no-target-blank */

import React from 'react';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Button, Glyphicon, Tooltip, OverlayTrigger, Table,
} from 'react-bootstrap';


const ProductRow = withRouter(({
  product, location: { search }, deleteProduct, index,
}) => {
  // eslint-disable-next-line no-unused-vars
  const selectLocation = { pathname: `/products/${product.id}`, search };
  const editTooltip = (
    <Tooltip id="close-tooltip" placement="top">Edit Product</Tooltip>
  );
  const deleteTooltip = (
    <Tooltip id="delete-tooltip" placement="top">Delete Producr</Tooltip>
  );

  function onDelete(e) {
    e.preventDefault();
    deleteProduct(index);
  }
  const tableRow = (
    <tr>
      <td>{product.pname}</td>
      <td>{`$${product.price}`}</td>
      <td>{product.category}</td>
      <td><a href={`/#/imagedisplay/${product.imageUrl}`}>View</a></td>
      <td>
        <LinkContainer to={`/edit/${product.id}`}>
          <OverlayTrigger delayShow={1000} overlay={editTooltip}>
            <Button bsSize="xsmall">
              <Glyphicon glyph="edit" />
            </Button>
          </OverlayTrigger>
        </LinkContainer>
        {' | '}
        <OverlayTrigger delayShow={1000} overlay={deleteTooltip}>
          <Button bsSize="xsmall" onClick={onDelete}>
            <Glyphicon glyph="trash" />
          </Button>
        </OverlayTrigger>
      </td>
    </tr>
  );

  return (
    <LinkContainer to={selectLocation}>
      {tableRow}
    </LinkContainer>
  );
});

export default function ProductTable({ products, deleteProduct }) {
  // eslint-disable-next-line react/destructuring-assignment
  const productRows = products.map((product, index) => (
    <ProductRow
      key={product.id}
      product={product}
      deleteProduct={deleteProduct}
      index={index}
    />
  ));

  return (
    <Table bordered condensed hover responsive>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </Table>
  );
}
