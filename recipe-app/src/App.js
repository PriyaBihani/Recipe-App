import React, { Component } from 'react';
import SearchRecipe from './components/searchRecipe'
import {BrowserRouter,Route} from 'react-router-dom'
import ShowRecipe from './components/showRecipe'

class App extends Component{

  handleSearch=(search)=>{
    
  }
  render(){
     return(
       <BrowserRouter>
        <div className="App">
          <SearchRecipe />
          <Route exact path='/recipe/:recipe_name' component={ShowRecipe} />
        </div>
       </BrowserRouter>
     )
  }
}

export default App;
// 1. how to clear search bar after searching 
// 2. how can we make a unique key of every link so can request that same link 
// 3. RN only one search can be done since component only mount once but how can we correct it. may be using useEffect but how?