import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons'

export default class Details extends React.Component {
    constructor() {
        super()
        this.state = {
            /* userdata: [
                 {
                     "id": "0",
                     "name": 'sneha',
                     "address": 'down the code with simple functions and structure just to express',
                     "phone_number": 20992020
                 },
 
             ],*/
            userdata: [],
            newAddData: []
        }
        this.index = 1
    }



    async componentDidMount() {


        this._unsubscribe = this.props.navigation.addListener('focus', async () => {

            let user = [...this.state.userdata];   
          
            let details = await AsyncStorage.getItem('key')
            let detailsObject = JSON.parse(details)
            
            user.map(a => {
                console.log("after goback:", a.id)

                detailsObject.map(x => {
                    console.log("details:", x.name)
                    if (a.id == x.id)
                     a.name=x.name
                     a.address=x.address
                     a.number=x.number
                     this.setState({
                       a
                    })
                })
            })

        })

    }

    componentWillUnmount() {
        this._unsubscribe();
    }


    addItem = () => {
        const newadd = {
            id: "id:" + this.index,
            name: 'sneha',
            address: 'down the code with simple functions and structure just to express',
            phone_number: 20992020
        }

        this.setState({
            userdata: [...this.state.userdata, newadd]
        })
        this.index += 1;
    }

    gotoNext = (id) => {
        console.log("id in Details:", id)
        this.props.navigation.navigate('EditDetails', id)
    }
    renderItem = (data) => {
        return (
            <TouchableOpacity onPress={() => this.gotoNext(data.id)}>
                <View style={styles.listItem}>
                    <View >
                        <Text>{data.name}</Text>
                    </View>
                    <View>
                        <Text>{data.address}</Text>
                    </View>
                    <View>
                        <Text>{data.phone_number}</Text>
                    </View>

                </View>
            </TouchableOpacity>

        )
    }

    render() {
        return (
            <View style={styles.container}>
                {/*  <View style={styles.header}>
                <Text style={styles.headerTitle}>Feed</Text>
        </View>*/}

                <FlatList
                    style={styles.list}
                    data={this.state.userdata}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={(item, index) => {
                        return index.toString()
                    }}
                    showsVerticalScrollIndicator={false}
                />


                <TouchableOpacity style={styles.add} onPress={this.addItem}>
                    <MaterialIcons name="add" style={{ left: 5 }} size={40} color="white" />
                </TouchableOpacity>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFECF4'

    },
    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EBECF4',
        shadowColor: '#454D65',
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '500'

    },
    list: {
        marginHorizontal: 10,
        top: 70,
        // backgroundColor:'red'
    },
    listItem: {
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 20,
        flexDirection: 'row',
        marginVertical: 8,
        flexDirection: 'column'

    },
    add: {
        height: 50,
        width: 50,
        borderRadius: 80,
        backgroundColor: '#9400D3',
        left: 300,
        top: -40
    }
})