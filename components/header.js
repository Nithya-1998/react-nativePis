import React from 'react';
import { View, Text } from 'react-native';
import { globalstyles } from '../global-styles/globalstyles';
import Login from './login';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View>
                <View style={globalstyles.containerStyle}>
                    <Text style={globalstyles.textStyle}>
                        &#9776; BuyKart
                 </Text>
                </View>
                {/* <Login></Login> */}
            </View>
        );
    }
}

export default Header;
