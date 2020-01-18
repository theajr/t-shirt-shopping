import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

const FormItem = props => {
  const { show = true, children, ...rest } = props;
  return show ? <Form.Item {...rest}>{children}</Form.Item> : null;
};

FormItem.propTypes = {};

export default FormItem;
