import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons'

export default class EditDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            number: '',
            index: 0,
        }
    }


    saveData = async () => {
        const { name, address, number } = this.state;

        const id = this.props.route.params;
        let user = [{
            name: name,
            address: address,
            number: number,
            id: id
        }]
        await AsyncStorage.setItem('key', JSON.stringify(user))
        console.log("props", user)

        alert("Edit Details SuccessFully")
        this.props.navigation.navigate('Details')
    }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <MaterialIcons name="arrow-back" size={30} />
                    </TouchableOpacity>
                </View>

                <View style={styles.headerTitle}>
                    <Text style={{ fontWeight: 'bold', color: '#9400D3', fontSize: 35 }}>Edit Details</Text>
                </View>

                <TextInput
                    style={styles.name}
                    value={this.state.name}
                    autoCapitalize="none"
                    placeholder='Enter Name'
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                />


                <TextInput
                    style={styles.address}
                    autoCapitalize="none"
                    placeholder='Enter address'
                    onChangeText={address => this.setState({ address })}
                    value={this.state.address}
                    multiline={true}
                />

                <TextInput
                    style={styles.number}
                    value={this.state.number}
                    placeholder='Enter phone number'
                    autoCapitalize="none"
                    keyboardType='phone-pad'
                    maxLength={10}
                    onChangeText={number => this.setState({ number })}
                    value={this.state.number}
                />



                <TouchableOpacity style={styles.btnSave} onPress={this.saveData}>
                    <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.btnSave} onPress={()=>this.props.navigation.navigate('InfiniteLoop')}>
                    <Text style={styles.btnText}>Go to next question</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        marginVertical: 200

    },
    name: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    address: {
        marginTop: 10,
        width: 300,
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        paddingTop: -20

    },
    number: {
        marginTop: 10,
        width: 300,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
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
    headerTitle: {
        top: -80
    },
    header: {
        top: -140,
        left: -10
    }


})