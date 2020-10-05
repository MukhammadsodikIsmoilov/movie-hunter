import React, {Fragment} from 'react';
import Spin from '../assets/Spinner-1s-200px.gif';

const Spinner = ({width, ...otherProps}) => {
  const SpinStyle = {
    display: 'block',
    position: 'absolute',
    width: `${width ? width : '100px'}`,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  return (
    <Fragment>
      <img src={Spin} alt='Loading...' style={SpinStyle} {...otherProps} />
    </Fragment>
  );
};

export default Spinner;
