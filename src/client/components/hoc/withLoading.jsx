import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

const withLoading = (Component, style, containerStyle) => function EnhancedComponent({
  isLoading,
  loadingIconSize = 20,
  ...props
}) {
  if (!isLoading) {
    return <Component {...props} />;
  }

  return (
    <div style={containerStyle}>
      <CircularProgress style={style} color="inherit" size={loadingIconSize} />
    </div>
  );
};

withLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadingIconSize: PropTypes.number,
};

export default withLoading;
