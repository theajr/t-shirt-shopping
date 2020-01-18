import React from 'react';
import PropTypes from 'prop-types';
import { sizes } from '../../utils/products';
import { Button, Typography } from 'antd';

const FilterOptions = ({ filter, toggleFilterForSize, ...rest }) => {
  const sizesBtns = sizes().map(k => (
    <Button
      key={k}
      shape="circle"
      type={filter.indexOf(k) >= 0 ? 'primary' : 'dashed'}
      style={{ margin: 4, padding: 3 }}
      onClick={() => toggleFilterForSize(k)}
    >
      {k}
    </Button>
  ));

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography.Title level={4} align="center">
        Filters
      </Typography.Title>
      <Typography.Paragraph align="center">Size</Typography.Paragraph>
      {sizesBtns}
    </div>
  );
};

FilterOptions.propTypes = {};

export default FilterOptions;
