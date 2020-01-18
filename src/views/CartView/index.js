import { connect } from '../../utils/context';
import CartView from './CartView';

const mapStateToProps = ({ cart, showCartView, products }) => {
  return {
    cart,
    products,
    showCartView,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCart: (id, operation) => {
      dispatch({ operation, id });
    },
    toggleCartView: () => dispatch({ operation: 'TOGGLE_CART_VIEW' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartView);
