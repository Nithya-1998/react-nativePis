import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from '../components/login';
import Signup from '../components/signup';
import AllProduct from '../components/allproduct';
import Product from '../components/product';
import EditProduct from '../components/edit-product';
import AddProduct from '../components/add-product';
const Stack = createStackNavigator()
function MyStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'
                screenOptions={{
                    gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: 'skyblue',
                        height: 80
                    }
                }}
                headerMode='float'>
                <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="EditProduct" component={EditProduct} />
                <Stack.Screen name="AllProduct" component={AllProduct} />
                <Stack.Screen name="Product" component={Product} />
                <Stack.Screen name="AddProduct" component={AddProduct} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}
export default MyStackNavigator;