import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
const styles = StyleSheet.create({
    button:{
        width:50,
        height:50,
        backgroundColor:'red'
    },
    view:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    }
});
export default class Counter extends Component{
    constructor(props){
        super(props);
    }
   render(){
       const {counterReducer,increment,decrement} = this.props;
       return(
           <View style={styles.view}>
           <TouchableOpacity onPress={increment} style={styles.button}>
           <Text>up</Text>
           </TouchableOpacity>
           <Text>{counterReducer}</Text>
            <TouchableOpacity onPress={decrement} style={styles.button}>
            <Text>down</Text>
           </TouchableOpacity>
           </View>
       );
   } 

}