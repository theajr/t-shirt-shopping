import { Drawer, List, Typography } from 'antd';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import CartItem from '../../components/CartItem';

const getProduct = (products, id) => {
  return products.find(p => p.id === id);
};

const CartView = ({
  showCartView,
  products,
  onClose,
  cart,
  toggleCartView,
  updateCart,
  ...rest
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const transformed = Object.keys(cart).map(id => ({
    qty: cart[id],
    ...getProduct(products, id),
  }));
  const total = transformed
    .reduce((sum, i) => sum + i.qty * i.price.unit, 0)
    .toFixed(2);
  return (
    <Drawer
      title="Your cart.."
      placement="right"
      closable
      width={isMobile ? '100%' : '50%'}
      onClose={toggleCartView}
      visible={showCartView}
    >
      <List
        itemLayout="horizontal"
        dataSource={transformed}
        renderItem={item => <CartItem item={item} updateCart={updateCart} />}
      />
      <Typography.Title level={3} align="center">
        Total: ${total}
      </Typography.Title>
    </Drawer>
  );
};

CartView.propTypes = {};

export default CartView;
