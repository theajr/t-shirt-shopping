import { Layout, Menu, Icon, Badge, Button } from 'antd';
import React from 'react';

import MenuItem from '../antd-wrappers/MenuItem/MenuItem';
import { connect } from '../../utils/context';

const { Header, Content, Footer } = Layout;

const AppLayout = props => {
  const { children, profile, itemsInCart, toggleCartView } = props;

  return (
    <Layout
      style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Header
        style={{
          background: 'white',
          boxShadow: '0 2px 8px #f0f1f2',
          zIndex: 10,
          position: 'sticky',
          height: 'auto',
          top: 0,
        }}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            float: 'left',
          }}
        >
          A T-Shirt Store!
        </div>
        <Menu
          mode="horizontal"
          style={{ borderBottomWidth: 0, lineHeight: '64px' }}
        >
          <MenuItem key="/cart" show={!profile} style={{ float: 'right' }}>
            <Button type="link" onClick={toggleCartView}>
              <Badge
                count={itemsInCart}
                key="ellipsiss"
                title="Items in your cart"
                showZero={false}
              >
                <Icon type="shopping-cart" style={{ fontSize: 22 }} />
              </Badge>
            </Button>
          </MenuItem>
        </Menu>
      </Header>
      <Content
        style={{
          flex: '1 0 auto',
          background: '#fff',
          position: 'relative',
          padding: 5,
        }}
      >
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Built by @JayPathURI</Footer>
    </Layout>
  );
};

AppLayout.propTypes = {};
const mapStateToProps = ({ cart }) => {
  return {
    itemsInCart: Object.values(cart).reduce((sum, i) => sum + i, 0),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleCartView: () => dispatch({ operation: 'TOGGLE_CART_VIEW' }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
