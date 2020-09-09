import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import { globalstyles } from '../global-styles/globalstyles';
export default function Product(props) {
    console.log(props);
    const prod = props.route.params.item;
    return (
        <ScrollView>
            <View style={globalstyles.detail}>
                <Text style={globalstyles.textStyle}>Product Details
                <Text> {"\n"}{"\n"} </Text>
                    <Image
                        style={{ height: '150px', width: '150px', float: 'right' }}
                        source={prod.imageurl}
                    />
                    <Text style={globalstyles.text}>Title: {prod.title}</Text>
                    <Text> {"\n"}{"\n"} </Text>
                    <Text style={globalstyles.text}>Cost: {prod.cost}</Text>
                    <Text> {"\n"}{"\n"} </Text>
                    <Text style={globalstyles.text}>InStock: {prod.inStock}</Text>
                    <Text> {"\n"}{"\n"} </Text>
                    <Text style={globalstyles.text}>OutOfStock: {prod.outOfstock}</Text>
                    <Text> {"\n"}{"\n"} </Text>
                    <Text style={globalstyles.text}>Manufacturer: {prod.manufacturer}</Text>
                    <Text> {"\n"}{"\n"} </Text>
                    <Text style={globalstyles.text}>Material: {prod.material}</Text>
                    <Text> {"\n"}{"\n"} </Text>
                    <Text style={globalstyles.text}>Description: {prod.description}</Text>
                    <Text> {"\n"}{"\n"} </Text>
                </Text>
            </View>
        </ScrollView>
    )

}