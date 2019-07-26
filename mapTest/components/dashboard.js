import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Header} from 'react-native-elements'
export default class dashboard extends Component{

    render(){
        return (
            <View style={{flex:1}}>
                <StatusBar backgroundColor="#121212" barStyle="light-content" />
               <Header
                    backgroundColor={'#121212'}
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text:"Rahhal's Deshboard", style: { color: '#fff' } }}
                    />
            </View>
        )
    }
}