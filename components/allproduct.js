import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { globalstyles } from '../global-styles/globalstyles';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Button, Image, FlatList } from 'react-native';
import AddProduct from './add-product';
import { SearchBar } from 'react-native-elements';
import EditProduct from './edit-product';

class AllProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allproduct: [],
            search: '',
            dummy: []
        }
        this.getAllProducts();
    }
    componentWillMount() {
        this.getAllProducts();
    }
    getAllProducts = () => {
        axios.get('http://localhost:3000/allProduct').then(res => {
            this.setState({ allproduct: res.data, dummy: res.data });
            console.log(res.data);
        }, (error) => {
            console.log(error.data);
        })
    }
    deleteProduct = (e) => {
        axios.delete('http://localhost:3000/allProduct/' + e.id).then(res => {
            console.log(res.data);
            this.getAllProducts();
        })
    }
    captureSearch = (e) => {
        console.log(e);
        this.setState({ search: e })
        if (e === '' && e.length === 0) {
            this.getAllProducts()
        } else {
            let searchProd = this.state.allproduct.filter((prod) => {
                return prod.title.toLowerCase().match(e.toLowerCase());
            });
            console.log(searchProd);
            this.setState({ allproduct: searchProd });
        }
    }
    componentWillReceiveProps() {
        this.getAllProducts();
    }
    onEdit = (prod) => {
        console.log(prod);
        this.props.navigation.navigate('EditProduct', { item: prod });
    }
    onAdd = () => {
        this.props.navigation.navigate('AddProduct', { item: [] });
    }
    render() {
        return (
            <View style={mystyles.maincontainer}>
                <SearchBar
                    placeholder="Search Here..."
                    onChangeText={(text) => this.captureSearch(text)}
                    value={this.state.search}
                />
                {/* <Text style={{ width: 100, textAlign: 'center', alignItems: 'center', justifyContent: 'center', marginLeft: '150px', marginTop: '10px', borderRadius: 5 }} >
                <Button title="Login" onPress={() => { navigation.navigate('AllProduct') }} />
            </Text> */}
                <TouchableOpacity style={{ textAlign: 'center' }}
                    onPress={this.onAdd}>
                    <Text style={mystyles.add}>Add Product</Text>
                </TouchableOpacity>
                <ScrollView>
                    {
                        this.state.allproduct.map(prod => {
                            return (
                                <View key={prod.id}>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Product', { item: prod }) }}>
                                        <Text style={mystyles.listitem}>
                                            <Text>
                                                <Image
                                                    style={{ height: '50px', width: '50px', float: 'left' }}
                                                    source={prod.imageurl}
                                                />
                                                <Text style={{ textAlign: 'center',float: 'left', paddingStart: 10, paddingEnd: 10 }}>{prod.title}
                                                </Text>
                                            </Text>
                                            <Text></Text>
                                            <Text style={{ float: 'right' }} >
                                                <Text style={{ color: 'white', backgroundColor: 'red', borderRadius: 5, padding: 5 }}>In Stock:{prod.inStock}</Text> &nbsp;
                                                <Button title='Edit' value={prod} onPress={() => { this.onEdit(prod) }}></Button>  &nbsp;
                                                <Button title='Delete' value={prod} onPress={() => this.deleteProduct(prod)}></Button>
                                            </Text>
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>

        );
    }
}

export default AllProduct;

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
