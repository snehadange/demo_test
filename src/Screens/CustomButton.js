import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default class CustomButton extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn}>
                     <Text style={styles.text}>Edit</Text>
                    <MaterialCommunityIcons style={styles.icon} name="briefcase-edit-outline" size={20}/>
                </TouchableOpacity>
               
                <TouchableOpacity style={styles.btnTwo}>
                     <Text style={styles.textTwo}>Edit</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.gotoNext} onPress={()=>this.props.navigation.navigate('Details')}>
                     <Text>Go To next Question</Text>
                 </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        flexDirection: 'row',
         width  :110,
         height:35,
         borderColor:'#9400D3',
         borderWidth:3,
         paddingLeft:18,
         marginLeft:-100
    },
    text:{
        fontSize:20,
        paddingRight:10 ,
        color:'#9400D3',
        fontWeight:'bold'
    },
    icon:{
        color:'#9400D3' ,
        fontWeight:'bold',
         top:3
    },
    btnTwo:{
       flexDirection:'row',
       marginTop:25,
       width  :210,
       height:35,
       borderColor:'#9400D3',
       borderWidth:3,
       paddingLeft:70
    },
    textTwo:{
        fontSize:20,
        paddingRight:10 ,
        color:'#9400D3',
        fontWeight:'bold'
    },
    gotoNext:{
        top:100
    }
})