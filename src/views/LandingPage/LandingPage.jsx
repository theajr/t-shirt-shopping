import { Col, Icon, Row, Select } from 'antd';
import React, { useState } from 'react';
import FilterOptions from '../../components/FilterOptions';
import TShirt from '../../components/TShirt';
import CartView from '../CartView';

Icon.setTwoToneColor('#eb2f96');

const { Option } = Select;

const LandingPage = ({
  products,
  cart,
  filter,
  orderBy,
  updatedOrderBy,
  ...rest
}) => {
  const [isCartVisible, setCartVisibility] = useState(false);
  const sortFn =
    orderBy === 'price:asc'
      ? (a, b) => a.price.unit - b.price.unit
      : (a, b) => b.price.unit - a.price.unit;
  const filtered = products
    .filter(p =>
      filter.length === 0 ? true : p.sizes.some(s => filter.includes(s)),
    )
    .sort(sortFn);

  const tshirts = filtered
    .sort(sortFn)
    .map(t => <TShirt info={t} key={t.id} />);

  return (
    <>
      <Row>
        <Col md={4} sm={12}>
          <FilterOptions />
        </Col>
        <Col md={20}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              margin: 10,
            }}
          >
            <div style={{ margin: `10px auto` }}>
              {' '}
              {filtered.length} Product(s) found.
            </div>
            <div>
              <span>Order by: &nbsp;</span>
              <Select defaultValue={orderBy} onChange={updatedOrderBy}>
                <Option value="price:asc">Price, Low-High</Option>
                <Option value="price:desc">Price, High-low</Option>
              </Select>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {tshirts}
            <CartView
              visible={isCartVisible}
              onClose={() => setCartVisibility(false)}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
