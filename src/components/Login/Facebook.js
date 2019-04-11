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
    isAuthenticated: false,
	}

	responseFacebook = response => {
    console.log(response);
	  this.setState({
	    isLoggedIn: true,
	    userId: response.userId,
	    name: response.name,
      email: response.email,
      isAuthenticated: true,
	  })
	}
	componentClicked = () => console.log('clicked');

	render() {
    const { facebook } = this.props;
	  let fbContent;
	  if(this.state.isLoggedIn) {
      facebook(this.state.name)
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
