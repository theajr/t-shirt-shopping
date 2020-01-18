/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-indent */
import { Button, Card, Tag, Divider } from 'antd';
import React, { useCallback } from 'react';
import styles from './styles.scss';

const { Meta } = Card;

const TShirt = ({ info, updateCart, cart, ...rest }) => {
  const {
    id,
    price: { unit, currency },
    picture,
    title,
    brand,
    sizes,
    discription,
  } = info;
  const addToCart = useCallback(() => {
    updateCart(id, 'ADD');
  }, [id]);
  const addOneMore = useCallback(() => {
    updateCart(id, 'INC');
  }, [id]);
  const removeOne = useCallback(() => {
    updateCart(id, 'DEC');
  }, [id]);
  const isInCart = cart.hasOwnProperty(id);
  const actions = isInCart
    ? [
        <Button
          style={{ borderRadius: 0 }}
          type="link"
          block
          icon="minus"
          key="edit"
          onClick={removeOne}
        />,
        <Button
          disabled
          style={{ borderRadius: 0, color: 'black' }}
          type="link"
          block
          key="setting"
        >
          {cart[id]}
        </Button>,
        <Button
          style={{ borderRadius: 0 }}
          type="link"
          block
          icon="plus"
          key="setting"
          onClick={addOneMore}
        />,
      ]
    : [
        <div className="add2cart" key="add2cart">
          <Button block icon="plus" type="link" onClick={addToCart}>
            Add to Cart
          </Button>
        </div>,
      ];
  return (
    <Card
      hoverable
      actions={actions}
      className={styles.card + ' ' + styles.hoverEffect}
      cover={
        <div
          style={{
            backgroundImage: `url(${picture})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            maxHeight: `200px`,
          }}
        >
          <img
            alt="example"
            src={picture}
            className={styles.coverHiddenImage}
          />
        </div>
      }
    >
      <Meta title={title} description={brand} />
      <Divider style={{ margin: '8px auto' }} />
      Sizes:{' '}
      {sizes.map(size => (
        <Tag key={size} color="magenta">
          {size}
        </Tag>
      ))}
      <Divider style={{ margin: '8px auto' }} />
      <b>
        {' '}
        {currency}
        {unit}
      </b>
    </Card>
  );
};

TShirt.propTypes = {};

export default TShirt;
