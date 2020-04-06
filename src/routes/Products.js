import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  function handleAdd(data) {
    dispatch({
      type: 'products/add',
      payload: data,
    });
  }
  return (
    <ProductList onDelete={handleDelete} onAdd={handleAdd} products={products} />
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);