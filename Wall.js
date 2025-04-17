import { StyleSheet, Text, View } from 'react-native'
import React,{Component} from 'react'

export default class Wall extends Component {
    render() {
        const width = this.props.size[0];
        const height = this.props.size[1];
        const x = this.props.body.position.x - width /2; //center
        const y = this.props.body.position.y - height /2; //center

        return(
            <View 
                style={{
                    position:'absolute',
                    top:y,
                    left: x,
                    width: width,
                    height: height,
                    backgroundColor: null,
                }}
            />

        )
    }
}

