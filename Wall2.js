import { StyleSheet, Text, View } from 'react-native'
import React,{Component} from 'react'
import { ImageBackground } from 'react-native';
export default class Wall2 extends Component {
    render() {
        const width = this.props.size[0];
        const height = this.props.size[1];
        const x = this.props.body.position.x - width /2; //center
        const y = this.props.body.position.y - height /2; //center

        return(
         <ImageBackground
                source={require('./assets/trafi2.jpg')} // Add your background image here
                style={{
                  position: 'absolute',
                  top: y,
                  left: x,
                  width: width,
                  height: height,
                  justifyContent: 'center', // Optional: to center the content inside
                  alignItems: 'center', // Optional: to center the content inside
                }}
                resizeMode="cover" // Use "cover" to fill the space, or "contain" to fit the image without cutting
    
              /> 
           

        )
    }
}

