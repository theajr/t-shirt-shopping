import { connect } from '../../utils/context';
import LandingPage from './LandingPage';

const mapStateToProps = ({ products, cart, orderBy, filter }) => {
  return {
    products,
    cart,
    filter,
    orderBy,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCart: (id, operation) => {
      dispatch({ payload: operation });
    },
    updatedOrderBy: orderBy => {
      dispatch({ operation: 'UPDATED_ORDER_BY', orderBy });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
