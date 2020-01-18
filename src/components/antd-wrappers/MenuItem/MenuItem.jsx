import { Menu } from 'antd';
import React from 'react';

const MenuItem = ({ show = true, children, ...rest }) => {
  return show ? <Menu.Item {...rest}>{children}</Menu.Item> : null;
};

MenuItem.propTypes = {};

export default MenuItem;
