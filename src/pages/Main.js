import React, { useEffect, useState } from 'react';
import './Main.scss';
import ListItem from './ListItem';
import GuideView from './GuideView';

// 네비 리스트
const navArr = [
  ['전체', ''],
  ['대형', 'E'],
  ['중형', 'D'],
  ['소형', 'C'],
  ['SUV', 'SUV'],
]

const Main = () => {

  const [data, setData] = useState([]);
  const [guideStr, setGuideStr] = useState('');
  const [navVal, setNavVal] = useState('');

  useEffect(() => {
    // 전체 데이터 가져오기
    getData();
  }, []);

  // 데이터 가져오기
  const getData = (segment) => {
    let segmentStr = '';
    if (segment) {
      segmentStr = 'segment=' + segment;
    }
    fetch(`https://preonboarding.platdev.net/api/cars?${segmentStr}`, {
      method: 'GET',
      header: { 'Content-Type': `application/json` },
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        if (result.payload) {
          setData(result.payload);

          // 차량 없는경우
          if (!result.payload.length) {
            setGuideStr('차량이 없습니다.')
          }
          console.log(result.payload);
        }
      });
  }

  /**
   * 네비 버튼 클릭
   */
  const clickNavBtn = (e) => {
    getData(e.target.value);
    setNavVal(e.target.value);
    console.log(e);
  }

  return (
    <>
      <header className='header'>
        <h1>전체차량</h1>
      </header>

      <div className="main">

        {/* ENUMC:소형, D:중형, E:대형, SUV:SUV */}
        <div className='select_nav'>
          {navArr.map((item, idx) => {
            return (
            <button 
              type="button" 
              key={idx} 
              onClick={clickNavBtn} 
              className={navVal === item[1] ? 'on' : ''} 
              value={item[1]}>{item[0]}
            </button>)
          })}
        </div>

        <div className='list_view'>

          {/* 차량 리스트가 있는경우 */}
          {data.length ? data.map((item, idx) => {
            return (
              <ListItem item={item} key={idx} />
            )

            // 차량 리스트가 없는경우
          }) : <GuideView guideStr={guideStr} />}

          {/* <GuideView guideStr={guideStr} /> */}
        </div>

      </div>
    </>
  );
}

export default Main;
