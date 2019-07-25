import React,{Component} from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native';
import { Input,Text as TextUI,Button  } from 'react-native-elements';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
         <View style={{flex:1,backgroundColor:'#121212',paddingTop:30,alignItems:'center',justifyContent:'center'}}>
              <View style={{flex:1}}>
            <TextUI h3 style={{color:'#ffffff'}}>Kindly, Login To Your Account</TextUI>
                </View>  
              <View style={{flex:3}}>
              <Input
              placeholderTextColor={'#ffffff'}
                style={{color:'#ffffff'}}
                containerStyle={{width:0.8*Dimensions.get('window').width,marginTop:30}}
                color={'#ffffff'}
                placeholder='Username'
                leftIconContainerStyle={{marginRight:10,marginLeft:10}}
                leftIcon={{ type: 'font-awesome', name: 'user',color:'#ffffff' }}
                />
                    <Input
                    placeholderTextColor={'#ffffff'}
                      containerStyle={{width:0.8*Dimensions.get('window').width,marginTop:30}}
                      color='#ffffff'
                      style={{color:'#ffffff'}}
                    
                      placeholder='Password'
                      type='password'
                      leftIconContainerStyle={{marginRight:10,marginLeft:10}}
                      leftIcon={{ type: 'font-awesome', name: 'key',color:'#ffffff' }}
                      />                

                      <Button type={'outline'} title={'Login'} buttonStyle={{borderColor:'#ffffff',}} containerStyle={{marginTop:20,width:0.8*Dimensions.get('window').width}} titleStyle={{color:'#ffffff'}}/>
          </View>  
                   
         </View>
        );
    }
}

export default Login;