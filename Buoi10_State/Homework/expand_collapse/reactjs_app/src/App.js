import React from 'react';

class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
    isExpanded: false
  }
 }
 handleExpand = () => {
    this.setState({ isExpanded: true })
 }
 handleCollapse = () => {
    this.setState({ isExpanded: false })
 }
 render() {
  const { isExpanded } = this.state
  const title = <h1 style={{backgroundColor:'green', height:100, fontSize:60, margin:0, color:"white"}}>Conditional Rendering</h1>
  if(isExpanded) {
    return (
          <div>
            {title}
            <button onClick={this.handleCollapse}>Đóng giới thiệu</button>
            <h1>Giới thiệu</h1>
            <p>Trong ReactJs, đôi khi bạn có một số component và tuỳ thuộc vào từng điều kiện ví dụ như trạng thái của state, props,... mà bạn muốn hiển thị một hoặc một số component nào đó. Khi đó bạn có thể sử dụng Conditional rendering để render ra component mà bạn mong muốn</p>
          </div>
        )
  }
  return(
    <div>
      {title}
     <button onClick={this.handleExpand}>Mở giới thiệu</button>

    </div>
  )
 }
}

export default App;
