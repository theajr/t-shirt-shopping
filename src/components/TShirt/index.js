import { connect } from '../../utils/context';
import TShirt from './TShirt';

const mapStateToProps = ({ products, cart }) => {
  return {
    products,
    cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCart: (id, operation) => {
      dispatch({ id, operation });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TShirt);
