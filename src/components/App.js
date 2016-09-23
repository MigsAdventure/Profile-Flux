import React from 'react';                 
import ProfileStore from '../stores/ProfileStore'
import ProfileActions from '../actions/ProfileActions'
import Profile from './Profile'


const App = React.createClass({
  getInitialState() {
    return {
      profileInfo: ProfileStore.getAll()
    }
  },

  componentWillMount() {
    ProfileStore.startListening(this._onChange);
  },

  componentWillUnmount() {
    ProfileStore.stopListening(this._onChange);
  },

  editInfo (newProfile) {
    ProfileActions.profileName(newProfile.name);
    ProfileActions.profileBio(newProfile.bio);
    ProfileActions.profilePic(newProfile.pic);
  },

  _onChange() {
    this.setState({
      profileInfo: ProfileStore.getAll()
    });
  },

  render() {
    const {profileInfo} = this.state;
    console.log("this is my profile Object: ", profileInfo);

    return (
      <div> 
        <Profile sendToEdit={profileInfo} newInfo={this.editInfo}/>
      </div>
      )
  }
});

module.exports = App;