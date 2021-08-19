import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image: "http://health.chosun.com/site/data/img_dir/2020/07/21/2020072103114_0.jpg",
    rating: 5
  },
  {
    id:2,
    name: "Samgyeopsal",
    image: "http://www.mindgil.com/news/photo/202103/70839_7148_1250.jpg",
    rating: 4.9
  },
  {
    id:3,
    name: "Bibimbap",
    image: "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
    rating: 4.8
  },
  {
    id:4,
    name: "Doncasu",
    image: "https://www.ypsori.com/news/photo/201811/14515_14466_1033.jpg",
    rating: 5.5
  },
  {
    id:5,
    name: "Bulgogi",
    image: "http://db.kookje.co.kr/news2000/photo/2021/0611/L20210611.22014003298i1.jpg",
  }
];


function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt=""/>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div className="App">
      { foodILike.map((item) => (
        <Food key={item.id} name={item.name} picture={item.image} rating={item.rating} />
      )) }
    </div>
  );
}

export default App;
