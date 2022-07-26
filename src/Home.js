
import React ,{useState,useEffect} from 'react'

function Home({ authIn }) {
  const [user,setUser] = useState([]);
  async  function fetchData (){
    await  fetch("https://fakestoreapi.com/products")
    .then((response) =>{
       return   response.json();
    }).then((data)=>{
       let gagan =  data.results
        console.log(gagan);
        setUser(gagan)
    })
}
useEffect(()=>{
  fetchData();
},[])
  return (
  
     <>  {user.map(data => ( 
      <><img src={data.image} alt=""/></>
      ))}
     </>
        );
      }

export default Home;




// import React, { Component } from 'react'

// export default class Home extends Component {
//   constructor(){
//     super();
//     this.state={
//       user:[]
//     }
//   }
//   componentDidMount(){
//     fetch("https://fakestoreapi.com/products")
//     .then((response)=>(response.json()))
//     .then((result)=>{
//       console.log(result)
//       this.setState({
//         user:result.data
//       })
//     })
//   }
//   render() {
//     return (
//       <div>
//         {this.state.user.map((u,i)=>{
//           return(
//             <div className='main-container'>
//             <h1 style={{backgroundColor:"blue"}} >firstname:{u.catagory}</h1>
//             <img src={u.image} alt="image"/>
//             <p>{u.price}</p>
//             <p>{u.description}</p>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
// }