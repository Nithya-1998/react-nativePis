import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { globalstyles } from '../global-styles/globalstyles';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Button, Image, FlatList } from 'react-native';
import AddProduct from './add-product';
import EditProduct from './edit-product';
import { SearchBar } from 'react-native-elements';

export default function AllProduct({ navigation }) {
    const [allproduct, setAllProduct] = useState([]);
    const [search, setSearch] = useState('');
    const [dummy, setDummyData] = useState('');
    useState(() => {
        axios.get('http://localhost:3000/allProduct').then(res => {
            console.log(res.data);
            setAllProduct(res.data);
            setDummyData(res.data)
        })
    }, [])

    const deleteProduct = (e) => {
        axios.delete('http://localhost:3000/allProduct/' + e.id).then(res => {
            // console.log(res.data);
            axios.get('http://localhost:3000/allProduct').then(res => {
                // console.log(res.data);

            })
        })
    }
    const captureSearch = (e) => {
        setSearch(e);
        console.log(e);
        if (e === '' && e.length === 0) {
            setAllProduct(dummy)
        } else {
            let searchProd = dummy.filter((prod) => {
                return prod.title.toLowerCase().match(e.toLowerCase());
            });
            console.log(searchProd);
            setAllProduct(searchProd);
        }

    }
    return (
        <View style={mystyles.maincontainer}>
            <SearchBar
                placeholder="Search Here..."
                onChangeText={captureSearch}
                value={search}
            />
            {/* <Text style={{ width: 100, textAlign: 'center', alignItems: 'center', justifyContent: 'center', marginLeft: '150px', marginTop: '10px', borderRadius: 5 }} >
                <Button title="Login" onPress={() => { navigation.navigate('AllProduct') }} />
            </Text> */}
            <TouchableOpacity style={{ textAlign: 'center' }}
                onPress={() => { navigation.navigate('AddProduct', { item: [] }) }}>
                <Text style={mystyles.add}>Add Product</Text>
            </TouchableOpacity>
            {/* <Text >
                <Button title="Add">
                    <AddProduct></AddProduct>
                </Button>
            </Text> */}
            <ScrollView>
                {
                    allproduct.map(prod => {
                        return (
                            <View key={prod.id}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Product', { item: prod }) }}>
                                    <Text style={mystyles.listitem}>
                                        <Text>
                                            <Image
                                                style={{ height: '40px', width: '40px', float: 'left' }}
                                                source={prod.imageurl}
                                            />
                                        </Text>
                                        <Text></Text>
                                        <Text style={{ float: 'left', textAlign: 'center', paddingTop: 10, paddingStart: 10, paddingEnd: 10 }}>{prod.title}
                                        </Text>

                                        <Text style={{ float: 'right' }} >
                                            <Button title='Edit' onPress={() => { navigation.navigate('EditProduct', { item: prod }) }}></Button>
                                            &nbsp;
                                            <Button title='Delete' onPress={() => deleteProduct(prod)}></Button>
                                        </Text>
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )

}
const mystyles = StyleSheet.create({
    maincontainer: {
        backgroundColor: 'skyblue',
        flex: 1,
        //alignItems:'center',
        //justifyContent:'center'
    },
    listitem: {
        marginTop: 20,
        fontSize: 15,
        backgroundColor: 'black',
        padding: 10,
        fontWeight: 'bold',
        color: 'white',
        // display:'flex',
        flexDirection: 'row'
    },
    add: {
        marginTop: 20,
        fontSize: 15,
        backgroundColor: 'purple',
        padding: 10,
        marginStart: 100,
        marginEnd: 100,
        fontWeight: 'bold',
        color: 'white',
        flexDirection: 'row',
        borderRadius: 5
    }
})
