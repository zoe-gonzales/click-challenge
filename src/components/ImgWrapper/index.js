import React, { Component } from 'react';
import List from '../ImgList';
import Header from '../Header';
import shuffle from 'shuffle-array';

class Wrapper extends Component {
    state = {
        score: '',
        topScore: '',
        images: this.props.images
    }

    handleClick = id => {
        const images = this.state.images.filter(image => {
        // identifying the image that was clicked by id
        if (image.id === id) {
            let score = this.state.score;
            let topScore = this.state.topScore;

            if (image.clicked) {
                this.setState({ score: 0 });
                // resets top score if current score surpasses it
                if (score > topScore) this.setState({ topScore: score });
                // mapping over array to reset clicked value to false so that user can play multiple rounds
                this.state.images.map(image => {
                    if (image.clicked) {
                        image.clicked = false;
                        return image;
                    } else return image;
                });
                return image;
            } else {
                score++;
                if (score > topScore) this.setState({ topScore: score });
                this.setState({ score: score });
                return image.clicked = true;
            }

        } else return image;
    });

        const newArray = shuffle(images, { 'copy': true });
        this.setState({ images: newArray });
    }

    render = () => {
        return (
            <div>
                <Header currentScore={this.state.score} topScore={this.state.topScore}/>
                <List list={this.state.images} handler={this.handleClick}/>
            </div>
        )
    }
}

export default Wrapper;