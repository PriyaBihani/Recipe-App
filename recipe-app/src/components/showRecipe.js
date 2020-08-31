import React,{Component} from 'react'
import axios from 'axios'

class ShowRecipe extends Component{
    state ={
        recipe:null,
        availability: false
    }
    async componentDidMount(){
        let search = this.props.match.params.recipe_name
        const YOUR_APP_ID = "e57ce14d"
        const YOUR_APP_KEY = "fb9063a7966d7bd1fa3921eca5e34f57"
        let url = `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
        const res= await axios.get(url)
        this.setState({
            recipe: res.data.hits[0],
            availability: true
        })
    }
    render(){
        console.log(this.state.recipe)
        const recipe = this.state.availability? (
            <div key={this.state.recipe.recipe.label}>
                    <div>
                    <span>Label:{this.state.recipe.recipe.label} </span>
                    </div>
                    <div>
                    <span>Source:{this.state.recipe.recipe.source} </span>
                    </div>
                    <div>
                    <span><img src={this.state.recipe.recipe.image} alt="food"/> </span>
                    </div>
                    <div>
                        recepie:{
                            this.state.recipe.recipe.ingredientLines.map(ingredient =>{
                                return(
                                    <div key={this.state.recipe.recipe.label}>
                                        {ingredient}
                                    </div>
                                )
                            })
                            } 
                    </div>
                    <div>
                        <div>Visit the site to have more details</div>
                        <span><a href={this.state.recipe.recipe.url}>Url</a></span>
                    </div>
                </div>
        
        
        ) :(
            <div> Loading </div>    
        )    
        return(
            <div>
                {recipe}
            </div>
        )
    }
}
export default ShowRecipe