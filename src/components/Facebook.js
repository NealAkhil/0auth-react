import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
    state={
        isLoggedIn:false,
        userID:'',
        name:'',
        email:'',
        picture:''
    }
    render() {
        let FbContent;
        
        if(this.state.isLoggedIn){

        }else{
            FbContent=(
                <FacebookLogin
                    appId="2251077208292761  "
                    autoLoad={true}
                    callback={this.responseFacebook}
                    render={renderProps => (
                    <button onClick={renderProps.onClick}>This is my custom FB button</button>
                    )}
                />
            )
        }
        return (
            <div>
                
            </div>
        )
    }
}
