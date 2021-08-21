import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    // 이 props에서 location과 history를 가져오기
    const { location, history } = this.props;
    if( location.state === undefined ) {
      history.push("/");
    }
  }
  render(){
    const { location } = this.props;
    return <span>{location.state.title}</span>;
  };
}

export default Detail;