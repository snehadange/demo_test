import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

//Userarray = [ { name: Samuel, age: 23 } , { name: Racheal, age: 24 } , { name: Norway, age: 76 } , {
//name: Sohel, age: 64 } , { name: Crimson, age: 45 } , { name: Shaggy, age: 34 } ]
export default class MapExample extends React.Component{
    state={
        Userarray :
         [ { name: Samuel, age: 23 } , { name: Racheal, age: 24 } , { name: Norway, age: 76 } , {
            name: Sohel, age: 64 } , { name: Crimson, age: 45 } , { name: Shaggy, age: 34 } ]
    }
    render(){
        return(
            <View>
                <Text>MapExample</Text>
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})