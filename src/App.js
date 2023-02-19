//import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[]   
  }
}
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users").then((Response)=>
    Response.json()
  ).then((users)=>{
    this.setState(()=>{
      return {
      monsters:users
      }
    })
  })
}
  render(){
    return(
    <div className='App'>
     <header className='App-header'>
      <input className='search-boc' type="search" placeholder='search name' onChange={(event)=>{
       console.log(event) ;
       const inputname=event.target.value.toLocaleLowerCase();
       const filteredusers=this.state.monsters.filter((monster)=>{
       return monster.name.toLocaleLowerCase().includes(inputname);
       });
       this.setState(()=>{
       return{ monsters:filteredusers}
       });
      }
      
      } />
        {
        this.state.monsters.map((i)=>{
          return <h1>{i.name}</h1>
          
        })
        }
     </header>
    </div>
    )    
  }
}
export default App; 
/*
///********************change name when button click****************************** 
// render(){
//   return(
//   <div className='App'>
//    <header className='App-header'>
//     <h1>{this.state.name}</h1>
//     <button onClick={()=>{
//     this.setState({
//       name:"selva"
//     })
//     }}>change_nme</button>
//    </header>
//   </div>
//   )
//// }
*********************************************************************************************
 render(){
    return(
    <div className='App'>
     <header className='App-header'>
      <h1>{this.state.hname}</h1>
      <h1>{this.state.name.firstName} {this.state.name.lastName}</h1>
      <button onClick={()=>{
      this.setState(()=>{
        return {
         name:{firstName:"selva",lastName:"kumar"}
        }
      })
      }}>change_nme</button>
     </header>
    </div>
    )
    
  }
******************************Iterator Using Map*******************************
render(){
    return(
    <div className='App'>
     <header className='App-header'>
        {
        this.state.fruits.map((i)=>{
          return <h1>{i.name}</h1>
        })
        }
     </header>
    </div>
    )    
  }
 *************************Key Value set**********************************
   render(){
    return(
    <div className='App'>
     <header className='App-header'>
        {
        this.state.fruits.map((i)=>{
          return <div key={i.id}>
   <h1>{i.name}</h1>
          </div>
        })
        }
     </header>
    </div>
    )    
  } 

  *****************************API using and extract data*********************
   constructor(){
    super();
    this.state={
      monster:[]   
  }
}
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users").then((Response)=>
    Response.json()
  ).then((users)=>{
    this.setState(()=>{
      return {
      monster:users
      }
    })
  })
}
  render(){
    return(
    <div className='App'>
     <header className='App-header'>
        {
        this.state.monster.map((i)=>{
          return <h1>{i.name}</h1>
          
        })
        }
     </header>
    </div>
    )    
  }
}
***********************Search and Filtering************************
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users").then((Response)=>
    Response.json()
  ).then((users)=>{
    this.setState(()=>{
      return {
      monsters:users
      }
    })
  })
}
 render(){
    return(
    <div className='App'>
     <header className='App-header'>
      <input className='search-boc' type="search" placeholder='search name' onChange={(event)=>{
       console.log(event) ;
       const inputname=event.target.value.toLocaleLowerCase();
       const filteredusers=this.state.monsters.filter((monster)=>{
       return monster.name.toLocaleLowerCase().includes(inputname);
       });
       this.setState(()=>{
       return{ monsters:filteredusers}
       });
      }
      
      } />
        {
        this.state.monsters.map((i)=>{
          return <h1>{i.name}</h1>
          
        })
        }
     </header>
    </div>
    )    
  }
*/

