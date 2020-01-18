import { Avatar, Button, List, Typography } from 'antd';
import React from 'react';
const CartItem = ({ item, updateCart, ...rest }) => {
  const {
    id,
    price: { unit, currency },
    picture,
    title,
    brand,
    sizes,
    discription,
    qty,
  } = item;
  const amount = unit * qty;
  const amountElement = (
    <b>
      {currency}.{unit.toFixed(2)} x {qty}= {currency}.{amount.toFixed(2)}
    </b>
  );
  return (
    <List.Item
      actions={[
        <Button
          icon="delete"
          key="xx"
          type="link"
          style={{ color: 'red', fontSize: 22 }}
          onClick={() => {
            updateCart(item.id, 'REMOVE');
          }}
        />,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={picture} />}
        title={title}
        description={
          <Typography.Paragraph>
            {discription}
            <br />
            {amountElement}
          </Typography.Paragraph>
        }
      />
    </List.Item>
  );
};

CartItem.propTypes = {};

export default CartItem;
