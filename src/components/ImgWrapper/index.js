import React, { Component } from 'react';
import List from '../ImgList';
import Header from '../Header';
import shuffle from 'shuffle-array';

class Wrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            score: '',
            topScore: '',
            images: props.images
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = id => {
        const images = this.state.images.filter(image => {
            if (image.id === id) {
                if (image.clicked) {
                    this.setState({ score: 0 });
                    console.log("error, image clicked more than 1x");
                    return image;
                } else {
                    let score = this.state.score;
                    score++;
                    this.setState({ score: score });
                    return image.clicked = true;
                }
            } else {
                return image;
            }
        });
        console.log(images);

        const newArray = shuffle(images, { 'copy': true });

        this.setState({
            images: newArray
        });
    }

    render = () => {
        return (
            <div >
            <Header currentScore={this.state.score} topScore={this.state.topScore}/>
            <List list={this.state.images} handler={this.handleClick}/>
            </div>
        )
    }
}

export default Wrapper;