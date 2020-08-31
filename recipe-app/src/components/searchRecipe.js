import React,{Component} from 'react'
import GetRecipe from './getRecipe'

class SearchRecipe extends Component {
    
    state={
        search: null,
        isSubmitted: false
    }
    handleChange=(e)=>{
        this.setState({
            search : e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log("search recipe", this.state)
        this.setState({
            isSubmitted:true
        })
    }
    // componentWillUnmount(){
    //     if(this.state.isSubmitted === true){
    //         this.setState({
    //             search: null,
    //             isSubmitted:false
    //         }) 
    //     }
    // }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search Recipe</label>
                    <input type="text" onChange={this.handleChange}/>
                    <button>Submit</button>
                    {this.state.isSubmitted &&  <GetRecipe search={this.state.search} isSubmitted={this.state.isSubmitted}/>
                   }
                </form>
            </div>
        )
    }
}
export default SearchRecipe