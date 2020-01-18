import { connect } from '../../utils/context';
import FilterOptions from './FilterOptions';

const mapStateToProps = ({ filter, ...rest }) => {
  return {
    filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFilterForSize: size => {
      dispatch({ operation: 'TOGGLE_SIZE_IN_FILTER', size });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterOptions);
