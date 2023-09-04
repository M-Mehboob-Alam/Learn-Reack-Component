import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
// function Hi(){
//   return <div>Hellow World</div>
// }

// const Card = ({name, url, body} ) => (
//   <div className='mediaCard'>
//     <h6>{name}</h6>
//     <p>{body}</p>
//     <img style={{padding: "200px"}} src={url}  alt=''/>

//   </div>
// );

// const MediaCard = ()=>(
//   <>
//     <Card name="Mehboob Alam" body="A Web Developer" url="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"/>
//     <Card name="Shahzad " body="A Finance" url="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
//     <Card name="M Shan" body="An Economist" url="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
//   </>
// )

// ReactDOM.render(<MediaCard/>, document.querySelector('#root'));
function WorkOnState() {
  const [isLit , setLit] = useState(true);
return (<div className={`room ${isLit ? 'lit': 'dark'}`}>
  <div>Room is {isLit ? 'lit': 'dark'}</div>
  <button className='btn' onClick={()=>(setLit(!isLit))}>Change To {isLit ? 'Night': 'Day'} </button>

</div>);
}
ReactDOM.render(<WorkOnState/>, document.querySelector('#root'));