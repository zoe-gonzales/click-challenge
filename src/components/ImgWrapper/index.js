import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Image from '../Image';
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
            <Container>
                {this.state.images.map(image => {
                    return <Image 
                        key={image.id} 
                        id={image.id}
                        name={image.name}
                        handler={() => this.handleClick(image.id)}
                        source={`/images/${image.file}.jpg`}/>
                })}
            </Container>
            </div>
        )
    }
}

export default Wrapper;