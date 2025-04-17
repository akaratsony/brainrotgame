import { Dimensions } from 'react-native';  // Helyes modulnév: Dimensions
import React,{Component} from 'react'

export default Constants = {
    MAX_WIDTH: Dimensions.get("window").width,  // Helyes használat
    MAX_HEIGHT: Dimensions.get("window").height,
    GAP_SIZE: 200,
    PIPE_WIDTH: 100,
}
