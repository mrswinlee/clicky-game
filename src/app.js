import React, { Component } from 'react';
import ImageCard from './components/ImageCards';
import imageData from './imageData';


class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        message: "Click an image to begin!",
        currentScore: 0,
        topScore: 0,
        images: imageData,
        lastClicked: ""

    }
    this.reorderImages = this.reorderImages.bind(this);
  }
    

    componentDidMount() {

    }

    reorderImages (id) {
        if (id===this.state.lastClicked){
            console.log("You lose!")
        this.setState({currentScore: 0, lastClicked: id})
        } else {
            function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
            }

            console.log("You got clicked!", this.state);
            const newOrder = shuffle(this.state.images);
            const newCurrentScore = this.state.currentScore+=1;
            if (newCurrentScore > this.state.topScore) {
                this.setState({images: newOrder, lastClicked:id, currentScore: newCurrentScore, topScore: newCurrentScore})
            } else {
                this.setState({images: newOrder, lastClicked:id, currentScore: newCurrentScore})
            }
        }

    }

        

    render() {
        console.log(this.state);
        return (
            <div>
            <h1>{this.state.currentScore}</h1>
                {
                    this.state.images.map((singleDude)=>{
                        return(<ImageCard image={singleDude.image} reorder={this.reorderImages} name={singleDude.id}/>);


                    })
                }
            </div>
     
        );
    }
}

export default App;
