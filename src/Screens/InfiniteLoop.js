import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class InfiniteLoop extends React.Component{
    state={
        number:0
    }
    componentDidMount(){
      setInterval(()=>{  
        this.setState({
            number:this.state.number+1
        })  
      },1000)
    }


    render(){
        return(
            <View style={styles.container}>
                <Text>{this.state.number}</Text>
                <TouchableOpacity style={styles.btnSave} onPress={()=>this.props.navigation.navigate('DateExample')}>
                    <Text style={styles.btnText}>Go to next question</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btnSave: {
        marginTop: 40,
        backgroundColor: '#9400D3',
        borderRadius: 10,
        height: 40,
        padding: 10,
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
    },
})