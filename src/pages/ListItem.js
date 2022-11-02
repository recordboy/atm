import React from 'react';
import './ListItem.scss';
const ListItem = (props) => {
  const { item } = props;

  return (
    <div className='listItem'>
      <div className="info">
        <strong className='brand'>{item.attribute.brand}</strong>
        <strong className='name'>{item.attribute.name}</strong>
        <div className='ex'>{item.attribute.segment} / {item.attribute.fuelType}<br></br>월 {item.amount}원 부터</div>
      </div>
      <div className='img'>
        <img src={item.attribute.imageUrl} alt="" />
        <span className='new'>신규</span>
      </div>
    </div>
  )
}

export default ListItem;
