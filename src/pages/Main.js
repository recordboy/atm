import React, { useEffect, useState } from 'react';
import './Main.scss';
import ListItem from './ListItem';
import Not from './Not';

function Main() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://preonboarding.platdev.net/api/cars`, {
      method: 'GET',
      header: { 'Content-Type': `application/json` },
    })
      .then(response => {
        return response.json();
      })
      .then(result => {

        if (result.payload) {
          setData(result.payload);
          console.log(result.payload);
        }

      });

  }, []);

  return (
    <>
      <header className='header'>
        <h1>전체차량</h1>
      </header>

      <div className="main">
        <div className='select_nav'>
          <ul className="inner">
            <li className='on'>전체</li>
            <li>대형</li>
            <li>중형</li>
            <li>소형</li>
          </ul>
        </div>

        <div className='list_view'>

          {/* 차량 리스트가 있는경우 */}
          {data.length ? data.map((item, idx) => {
            return (
              <ListItem item={item} key={idx} />
            )

          // 차량 리스트가 없는경우
          }) : <Not />}

        </div>

      </div>
    </>
  );
}

export default Main;
