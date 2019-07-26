import React,{Component} from 'react';
import { StyleSheet, Text, View , Dimensions,ScrollView, StatusBar} from 'react-native';
import { Input,Text as TextUI,Button  } from 'react-native-elements';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password:"",
            passwordsStarts:"",
            username:"",
            loading:false,
            error:false
          };
    }
    changeStateUsername=(event)=>{
        this.state.username=event;
        this.setState(this.state)
        // console.log(this.state,event);
    }
    changeStatePassword =(event)=>{
        // this.state.password+= event;
        this.state.passwordsStarts = event;
        // let reg = new RegExp(/\*/,'g');
        // this.state.password = this.state.password.replace(reg,"");
        this.setState(this.state);
        // console.log(event,this.state)
    }
    login = event=>{
      this.state.loading = true;
      this.setState(this.state);
      setTimeout(()=>{
        if(this.state.passwordsStarts.toLowerCase()==="pass" && this.state.username.toLowerCase() ==="rahhal")
        {this.props.navigation.replace('Dashboard')}
        else
       { 
        this.state.loading = false;
        this.state.error = true;
        this.setState(this.state);
        }
      },5000)
    }

    renderTextError(){
    
            if(this.state.error)
            return (<Text style={{color:'#da1f26',marginTop:15}}> **Wrong Password</Text>)
            
    }
    render() {
        return (
         <View style={{flex:1,backgroundColor:'#121212',paddingTop:60,alignItems:'center',justifyContent:'center'}}>
             <StatusBar barStyle="light-content" />
              <View style={{height:0.10*Dimensions.get('window').height}}>
            <TextUI h3 style={{color:'#ffffff'}}>Kindly, Login To Your Account</TextUI>
                </View>  
                <ScrollView contentContainerStyle={{height:0.90*Dimensions.get('window').height}} >
              <View style={{flex:1,paddingTop:50}}>
              <Input
              value={this.state.username}
              placeholderTextColor={'#ffffff'}
                inputStyle={{color:'#ffffff'}}
                containerStyle={{width:0.8*Dimensions.get('window').width,marginTop:30}}
                color={'#ffffff'}
                placeholder='Username'
                onChangeText={this.changeStateUsername}
                leftIconContainerStyle={{marginRight:10,marginLeft:10}}
                leftIcon={{ type: 'font-awesome', name: 'user',color:'#ffffff' }}
                />
                    <Input
                    onChangeText={this.changeStatePassword}

                    placeholderTextColor={'#ffffff'}
                    value={this.state.passwordsStarts}
                      containerStyle={{width:0.8*Dimensions.get('window').width,marginTop:30}}
                      color='#ffffff'
                      inputStyle={{color:'#ffffff'}}
                    
                      placeholder='Password'
                      textContentType='password'
                      leftIconContainerStyle={{marginRight:10,marginLeft:10}}
                      leftIcon={{ type:"font-awesome", name: 'key',color:'#ffffff' }}
                      />                
                        {this.renderTextError()}
                      <Button type={'solid'} title={'Login'} 
                      loadingProps={{color:'#121212'}}
                      onPress={this.login} loading={this.state.loading}
                       buttonStyle={{backgroundColor:'#ffffff'}} 
                       containerStyle={{marginTop:20,width:0.8*Dimensions.get('window').width}}
                        titleStyle={{color:'#121212'}}/>
          </View>  
          </ScrollView>   
         </View>
        );
    }
}

export default Login;