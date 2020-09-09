import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../components/login';
import Signup from '../components/signup';
// import AllProduct from '../components/products';
import AllProduct from '../components/allproduct';
import Product from '../components/product';
import EditProduct from '../components/edit-product';
import AddProduct from '../components/add-product';
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

function MyDrawerNavigator() {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName='Login'
        //         screenOptions={{
        //             gestureEnabled: true,
        //             headerStyle: {
        //                 backgroundColor: 'skyblue',
        //                 height: 80
        //             }
        //         }}
        //         headerMode='float'>
        //         <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
        //         <Stack.Screen name="Login" component={Login} />
        //         <Stack.Screen name="EditProduct" component={EditProduct} />
        //         <Stack.Screen name="AllProduct" component={AllProduct} />
        //         <Stack.Screen name="Product" component={Product} />
        //         <Stack.Screen name="AddProduct" component={AddProduct} />
        //     </Stack.Navigator>
        // </NavigationContainer >
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default MyDrawerNavigator;