import React from 'react';
import './Loading.scss';

const Loading = (props) => {
  const {loadingOn} = props;
  return (

    <div className={loadingOn ? 'loading on' : 'loading'}>
      <img src='../images/loading.gif' alt='loading' />
      <div>Loading..</div>
    </div>
  );
}

export default Loading;
