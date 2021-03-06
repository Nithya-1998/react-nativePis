import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { globalstyles } from '../global-styles/globalstyles';
import axios from 'axios';
export default function EditProduct(props) {
    console.log(props);
    const prodId = props.route.params.item.id;
    const prod = props.route.params.item;
    console.log(prod);
    const [title, setTitle] = useState(prod.title);
    const [cost, setCost] = useState(prod.cost);
    const [material, setMaterial] = useState(prod.material);
    const [inStock, setInStock] = useState(prod.inStock);
    const [outOfStock, setOutOfStock] = useState(prod.outOfstock);
    const [manufacturer, setManufacturer] = useState(prod.manufacturer);
    const [description, setDescription] = useState(prod.description);
    const [imageurl, setImageUrl] = useState(prod.imageurl);

    const captureTitle = (title) => {
        console.log(title)
        setTitle(title);
    }
    const captureImageUrl = (imageurl) => {
        console.log(imageurl)
        setImageUrl(imageurl);
    }
    const captureCost = (cost) => {
        console.log(cost)
        setCost(cost);
    }
    const captureInStock = (inStock) => {
        console.log(inStock)
        setInStock(inStock);
    }
    const captureOutOfStock = (outOfStock) => {
        console.log(outOfStock)
        setOutOfStock(outOfStock);
    }
    const captureMaterial = (material) => {
        console.log(material)
        setMaterial(material);
    }
    const captureDescription = (description) => {
        console.log(description)
        setDescription(description);
    }
    const captureManufacturer = (manufacturer) => {
        console.log(manufacturer)
        setManufacturer(manufacturer);
    }
    const onSave = () => {
        console.log("Save...");
        const editproduct = {
            "title": title,
            "cost": cost,
            "material": material,
            "inStock": inStock,
            "outOfstock": outOfStock,
            "description": description,
            "manufacturer": manufacturer,
            "imageurl": imageurl
        }
        axios.put('http://localhost:3000/allProduct/' + prodId, editproduct).then((res) => {
            console.log(res.data);
            axios.get('http://localhost:3000/allProduct/').then((res) => {
                console.log(res.data);
                props.navigation.navigate("AllProduct", { allproduct: res.data });
            })

        });
        return true;
    }

    return (
        <ScrollView>
            <View style={globalstyles.card}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Edit Product</Text>
                <Text> {"\n"}{"\n"} </Text>
                <Text style={globalstyles.textStyle}>Title</Text>
                <Text></Text>
                <TextInput style={globalstyles.textInput}
                    placeholder='Enter Title...'
                    placeholderTextColor='black'
                    onChangeText={captureTitle}
                    keyboardType='default'
                    value={title}
                    autoCorrect={true}
                ></TextInput>
                <Text></Text>
                <Text style={globalstyles.textStyle}>Cost(Rs.)</Text>
                <Text></Text>
                <TextInput style={globalstyles.textInput}
                    placeholder='Enter Cost...'
                    placeholderTextColor='black'
                    onChangeText={captureCost}
                    keyboardType='numeric'
                    value={cost}
                    autoCorrect={false}
                ></TextInput>
                <Text></Text>
                <Text style={globalstyles.textStyle}>ImageUrl</Text>
                <Text></Text>
                <TextInput style={globalstyles.textInput}
                    placeholder='Enter Title...'
                    placeholderTextColor='black'
                    onChangeText={captureImageUrl}
                    keyboardType='default'
                    value={imageurl}
                ></TextInput>
                <Text></Text>
                <Text style={globalstyles.textStyle}>In Stock</Text>
                <Text></Text>
                <TextInput style={globalstyles.textInput}
                    placeholder='Enter In Stock number...'
                    placeholderTextColor='black'
                    onChangeText={captureInStock}
                    value={inStock}
                    keyboardType='numeric'
                    autoCorrect={true}
                ></TextInput>
                <Text></Text>
                <Text style={globalstyles.textStyle}>Out of Stock</Text>
                <Text></Text>
                <TextInput style={globalstyles.textInput}
                    placeholder='Enter Out of Stock number...'
                    placeholderTextColor='black'
                    onChangeText={captureOutOfStock}
                    value={outOfStock}
                    keyboardType='numeric'
                    autoCorrect={true}
                ></TextInput>
                <Text></Text>
                <Text style={globalstyles.textStyle}>Material</Text>
                <Text></Text>
                <TextInput style={globalstyles.textInput}
                    placeholder='Enter Material...'
                    placeholderTextColor='black'
                    onChangeText={captureMaterial}
                    value={material}
                    keyboardType='default'
                    autoCorrect={true}
                ></TextInput>
                <Text></Text>
                <Text style={globalstyles.textStyle}>Manufactuer</Text>
                <Text></Text>
                <TextInput style={globalstyles.textInput}
                    placeholder='Enter Manufacturer...'
                    placeholderTextColor='black'
                    onChangeText={captureManufacturer}
                    value={manufacturer}
                    keyboardType='default'
                    autoCorrect={true}
                ></TextInput>
                <Text></Text>
                <Text style={globalstyles.textStyle}>Description</Text>
                <Text></Text>
                <TextInput style={globalstyles.textInput}
                    placeholder='Enter Description...'
                    placeholderTextColor='black'
                    onChangeText={captureDescription}
                    value={description}
                    keyboardType='default'
                    autoCorrect={true}
                    multiline={true}
                ></TextInput>
                <TouchableOpacity style={globalstyles.saveButton}
                    title='Save' onPress={onSave}>
                    <Text>Save</Text>
                </TouchableOpacity>
                {/* <Button style={{ width: 30 }} title="Save" onPress={() => { navigation.navigate('AllProduct') }} /> */}
            </View>
        </ScrollView>
    )
}