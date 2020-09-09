import React, { useState, useEffect } from 'react';
import { globalstyles } from '../global-styles/globalstyles';
// import {  } from 'react-native-gesture-handler';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import Axios from 'axios';
function Login({ navigation }) {
    const [allUsers, setAllUsers] = useState([]);
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setInvalid] = useState(true);

    useEffect(() => {
        Axios.get('http://localhost:3000/login/').then((response) => {
            // console.log(response.data);
            setAllUsers(response.data);
        }, (error) => {
            console.log(error.data);
        })
    })
    const captureEmailId = (e) => {
        console.log(e);
        setEmailId(e);
    }
    const capturePassword = (e) => {
        console.log(e);
        setPassword(e);
    }
    const details = {
        "emailId": emailId,
        "password": password,
    }
    const isInvalid = () => {
        setInvalid(false)
    }
    const onLogin = () => {
        let userCheck = allUsers.filter((user) => {
            return (user.emailId === emailId && user.password === password);
        })
        console.log(userCheck.length);
        if (userCheck.length === 0) {
            return false;
        } else {
            return true;
        }
    }

    return (
        <ScrollView>
            <View style={globalstyles.card}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>Login</Text>
                <Text></Text>
                {!isValid &&
                    <Text>
                        <Text> {"\n"} </Text>
                        < Text style={{ fontSize: 20, color: 'red', fontWeight: 'bold', alignItems: 'center', textAlign: 'center' }}> Invalid Email-Id/Password</Text>
                    </Text>}
                <Text> {"\n"} </Text>
                <Text style={globalstyles.textStyle}>Email-Id</Text>
                <Text></Text>
                <TextInput style={globalstyles.textInput}
                    placeholder='Enter Email Id...'
                    placeholderTextColor='black'
                    onChangeText={captureEmailId}
                    keyboardType='email-address'
                    value={emailId}
                ></TextInput>
                <Text></Text>
                <Text style={globalstyles.textStyle}>Password</Text>
                <Text></Text>
                <TextInput style={globalstyles.textInput}
                    placeholder='Enter Password...'
                    placeholderTextColor='black'
                    onChangeText={capturePassword}
                    keyboardType='ascii-capable'
                    secureTextEntry={true}
                    password={true}
                    value={password}
                    autoCorrect={false}
                ></TextInput>

                <Text>
                    <Text style={{ width: 30, textAlign: 'left', borderRadius: 5 }} >
                        <Button title="Login" onPress={() => { onLogin() ? navigation.navigate('AllProduct') : isInvalid() }} /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </Text>
                    <TouchableOpacity style={{ width: 150, textAlign: 'center', marginRight: 500, marginTop: 10, backgroundColor: '#3498DB' }} title="NewUser?SignUp" onPress={() => { navigation.navigate('Signup') }} >
                        <Text>NewUser?SignUp
                </Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </ScrollView >
    );
}


export default Login;