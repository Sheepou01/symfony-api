/* eslint-disable */
import React from 'react';
import FacebookLogin from 'react-facebook-login';


class Facebook extends React.Component {
	state = {
    isLoggedIn: false,
    userId: '',
	  name: '',
	  email: '',
	  picture: '',
	}

	responseFacebook = response => {
	  this.setState({
	    isLoggedIn: true,
	    userId: response.userId,
	    name: response.name,
	    email: response.email,
	  })
	}
	componentClicked = () => console.log('clicked');

	render() {
	  let fbContent;
	  if(this.state.isLoggedIn) {
	    fbContent = null;
	  } else {
	    fbContent = (
				<FacebookLogin
					appId="552237008586166"
					autoLoad={true}
					fields="name,email,picture"
					onClick={this.componentClicked}
					callback={this.responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
				/>
	    );
	  }
	  return (
      <div>
        {fbContent}
      </div>
	  )
	}
}
export default Facebook
