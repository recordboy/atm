import React from 'react';
import './GuideView.scss';

const GuideView = (ptops) => {
  const {guideStr} = ptops;
  return (
    <div className='guideView'>{guideStr}</div>
  );
}

export default GuideView;
