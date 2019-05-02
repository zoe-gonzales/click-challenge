import React from 'react';
import { Container } from 'reactstrap';
import Image from '../Image';

export default function ImgList(props){
    return (
        <Container>
                {props.list.map(item => {
                    return <Image 
                        key={item.id} 
                        id={item.id}
                        name={item.name}
                        handler={() => props.handler(item.id)}
                        source={`/images/${item.file}.jpg`}/>
                })}
        </Container>
    )
}