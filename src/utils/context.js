import React, { useContext } from 'react';

export const AppContext = React.createContext();
export const { Provider } = AppContext;

export function connect(mapStateToProps, mapDispatchToProps, ...rest) {
  return function(Component) {
    return function(p) {
      const { state, dispatch } = useContext(AppContext);

      const stateToProps = mapStateToProps(state);
      const dispatchToProps = mapDispatchToProps(dispatch);
      const props = { ...p, ...stateToProps, ...dispatchToProps };

      return <Component {...props} />;
    };
  };
}
