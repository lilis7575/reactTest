import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movies = [
//   "가가가",
//   "나나나",
//   "다다다",
//   "라라라"
// ]

// const moviePosters = [
//   "https://upload.wikimedia.org/wikipedia/ko/c/c3/%EB%82%B4_%EC%9D%B4%EB%A6%84%EC%9D%80_%EC%B9%B8_%EC%98%81%ED%99%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
//   "http://img.hani.co.kr/imgdb/resize/2017/0306/00500005_20170306.JPG",
//   "http://imgmovie.naver.com/mdi/mi/0398/39841_P03_231710.jpg",
//   "http://file.thisisgame.com/upload/tboard/user/2016/07/08/20160708061954_5657.jpg"
// ]

class App extends Component {
  // componentWillMount() {
  //   console.log("componentWillMount");
  // }
  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  state = {
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movieData : [
          {title:"내이름은칸", poster:"https://upload.wikimedia.org/wikipedia/ko/c/c3/%EB%82%B4_%EC%9D%B4%EB%A6%84%EC%9D%80_%EC%B9%B8_%EC%98%81%ED%99%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"},
          {title:"MoonLight", poster:"http://img.hani.co.kr/imgdb/resize/2017/0306/00500005_20170306.JPG"},
          {title:"괴물", poster:"http://imgmovie.naver.com/mdi/mi/0398/39841_P03_231710.jpg"},
          {title:"THE IRON LADY", poster:"http://cdn.collider.com/wp-content/uploads/the-iron-lady-movie-poster-01.jpg"},
          {title:"aquaman", poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQS0SJzF8IDyKmtoMsEtI9uHAwxV3wN2-76NTMTS-c4uplOLa"}
        ]
      })
    }, 3000)
  }

  _renderMovie = () => {
    const v = this.state.movieData.map((mv, index) => {
      return <Movie title={mv.title} poster={mv.poster} key={index} /> 
    })

    return v;
  }

  render() {
    return (
      <div className="App">
        {this.state.movieData ? this._renderMovie() : "Loading..."}
      </div>
    );
  }
}

export default App;
