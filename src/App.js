import { useState } from 'react';

import dude from './resources/img/dude.png';
// import face from './resources/img/dude_face.png'
import './App.css';



function App() {
  const [data, setData] = useState({
    slide: -1,
    title: 'Kaveh',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus quas nam pariatur eaque provident ab eius necessitatibus dolore aspernatur explicabo odio ullam, obcaecati ipsa nesciunt quisquam. Non voluptatem pariatur commodi!'
  })

  // const changeData = (data) => {
  //   switch (data.slide) {
  //     case 1:
  //       console.log('slide 1');
  //       setData({
  //         title: 'Kaveh',
  //         text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus quas nam pariatur eaque provident ab eius necessitatibus dolore aspernatur explicabo odio ullam, obcaecati ipsa nesciunt quisquam. Non voluptatem pariatur commodi!'  
  //       });
  //       break;
  //     case 2:
  //       console.log('slide 2');
  //       setData({
  //         title: 'Alhaitham',
  //         text: 'Kaveh shut up'  
  //       });
  //       break;
  //     default:
  //       console.log(`dude wtf`);
  //   }
  // }

  const titleArr = ["Title1", "Title2", "Title3", "Title4"];
  const textArr = ["Text1", "Text2", "Text3", "Text4"];


  return (
    <div className="App">
      <div className="buttons"></div>

      <div className="dude">
        <div className="body">
          <img src={dude} alt="dude" />
        </div>
      </div>

      <div className="textarea">
        <div className="title">{data.title}</div>
        <span></span>
        <div className="text">{data.text}</div>
      </div>

      <button 
        className="Next"
        onClick={() => {
          let index = data.slide + 1;
          setData({
          slide: data.slide + 1,
          title: `${titleArr[index]}`,
          text: `${textArr[index]}`
        })}}>
        Next
      </button>

      <button 
        className="Prev"
        onClick={() => {
          let index = data.slide - 1;
          setData({
          slide: data.slide - 1,
          title: `${titleArr[index]}`,
          text: `${textArr[index]}`
        })}}>
        Prev
      </button>
    </div>
  );
}

export default App;
