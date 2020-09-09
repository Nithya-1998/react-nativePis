import React, { useState,useEffect } from 'react';
import { globalstyles } from '../global-styles/globalstyles';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import Axios from 'axios';
export default function Signup({ navigation }) {
    const [allUser, setAllUser] = useState([]);
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailValidate, setEmailValidate] = useState(true);
    const [passwordValidate, setPasswordValidate] = useState(true);
    const [confirmPasswordValidate, setConfirmPasswordValidate] = useState(true);
    const [isExist, setExixtError] = useState(true);
    useState(() => {
        Axios.get('http://localhost:3000/login/').then((res) => {
            console.log(res.data);
            setAllUser(res.data);
        }, (error) => {
            console.log(error.data);
        })
    })
    const captureEmailId = (e, type) => {
        console.log(e);
        const validateId = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (type === 'userId') {
            {
                if (validateId.test(e)) {
                    setEmailValidate(true);
                    setEmailId(e);
                } else {
                    setEmailValidate(false);
                }
            }
        }

    }
    const capturePassword = (e, type) => {
        console.log(e);
        const ValidatePassword = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        if (type === 'password') {
            {
                if (ValidatePassword.test(e)) {
                    setPasswordValidate(true);
                    setPassword(e);
                } else {
                    setPasswordValidate(false);
                }
            }
        }
        setPassword(e);
    }
    const captureConfirmPassword = (e, type) => {
        const confirmPwd = password;
        if (type === 'password') {
            {
                if (confirmPwd === (e)) {
                    setConfirmPasswordValidate(true);
                    setConfirmPassword(e);
                } else {
                    setConfirmPasswordValidate(false);
                }
            }
        }
    }
    const onSave = (details) => {
        let userCheck = allUser.filter((user) => {
            return (user.emailId === details.emailId);
        })
        console.log(userCheck);
        console.log(details);
        if (userCheck.length === 0) {
            Axios.post('http://localhost:3000/login/', details).then((response) => {
                console.log(response.data);
                setExixtError(true);
            }, (error) => {
                console.log(error.data);
            })
            return true;
        } else {
            setExixtError(false);
            return false;
        }

    }
    const details = {
        "emailId": emailId,
        "password": password
    }
    return (
        <ScrollView>
            <View style={globalstyles.card}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>SignUp</Text>
                <Text></Text>
                {!isExist &&
                    <Text>
                        <Text> {"\n"} </Text>
                        < Text style={{ fontSize: 20, color: 'red', fontWeight: 'bold', alignItems: 'center', textAlign: 'center' }}>User Already Exist</Text>
                    </Text>}
                <Text> {"\n"}</Text>
                <Text style={globalstyles.textStyle}>Email-Id</Text>
                <Text></Text>
                <TextInput style={[globalstyles.textInput,
                !emailValidate ? globalstyles.error : '']}
                    placeholder='Enter Email Id...'
                    placeholderTextColor='black'
                    onChangeText={(e) => captureEmailId(e, 'userId')}
                    keyboardType='email-address'
                ></TextInput>
                <Text></Text>
                {!emailValidate && <Text style={{ color: 'red',fontWeight:'bold', fontSize: 15 }}>Invalid Format</Text>}
                <Text style={globalstyles.textStyle}>Password</Text>
                <Text></Text>
                <TextInput style={[globalstyles.textInput,
                !passwordValidate ? globalstyles.error : '']}
                    placeholder='Enter Password...'
                    placeholderTextColor='black'
                    onChangeText={(e) => capturePassword(e, 'password')}
                    keyboardType='ascii-capable'
                    secureTextEntry={true}
                    password={true}
                    autoCorrect={false}
                ></TextInput>
                <Text></Text>
                {!passwordValidate &&
                    <Text style={{ color: 'red',fontWeight:'bold', fontSize: 15 }}>
                        <Text>Password should be Min 8 characters
                            <Text>{'\n'}</Text>
                            Atleast 1 Special Character
                            <Text>{'\n'}</Text>
                            Atleast 1 Uppercase
                            <Text>{'\n'}</Text>
                            Atleast 1 Numeric
                        </Text>
                        <Text>
                        </Text>
                    </Text>}
                <Text></Text>
                <Text style={globalstyles.textStyle}>Confirm Password</Text>
                <Text></Text>
                <TextInput style={[globalstyles.textInput,
                !confirmPasswordValidate ? globalstyles.error : '']}
                    placeholder='Enter Confirm Password...'
                    placeholderTextColor='black'
                    onChangeText={(e) => captureConfirmPassword(e, 'password')}
                    keyboardType='ascii-capable'
                    secureTextEntry={true}
                    password={true}
                    autoCorrect={false}
                ></TextInput>
                <Text></Text>
                {!confirmPasswordValidate && <Text style={{ color: 'red',fontWeight:'bold', fontSize: 15 }}>Password does not match</Text>}
                <Button title="SignUp" disabled={!emailValidate || !passwordValidate || !confirmPasswordValidate} onPress={() => { onSave(details) ? navigation.navigate('Login') : '' }} />
            </View>
        </ScrollView>
    );
}