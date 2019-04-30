import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Image from '../Image';
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
        const clicked = this.state.images.filter(image => image.id === id);
        const newArray = shuffle(this.state.images, { 'copy': true });
        this.setState({
            images: newArray
        });
    }

    render = () => {
        return (
            <Container>
                {this.state.images.map(image => {
                    return <Image 
                        key={image.id} 
                        id={image.id}
                        name={image.name}
                        clicked={false} 
                        handler={() => this.handleClick(image.id)}
                        source={`/images/${image.file}.jpg`}/>
                })}
            </Container>
        )
    }
}

export default Wrapper;