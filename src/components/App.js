import React from 'react';                 
import ProfileStore from '../stores/ProfileStore'
import ProfileActions from '../actions/ProfileActions'
import Profile from './Profile'
import Interests from './Interests'
import InterestForm from './InterestForm'

const App = React.createClass({
  getInitialState() {
    return {
      profileInfo: ProfileStore.getAll(),
      profileInterests: ProfileStore.getInterest()
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

  newInterest(interest) {
    console.log(interest)
    ProfileActions.createInterest(interest);
  },

  _onChange() {
    this.setState({
      profileInfo: ProfileStore.getAll(),
      profileInterests: ProfileStore.getInterest()
    });
  },

  render() {
    const {profileInfo, profileInterests} = this.state;
    console.log("this is my interests Object: ", profileInterests);

    return (
      <div> 
        <Profile sendToEdit={profileInfo} newInfo={this.editInfo}/>
        <Interests sendInterests={profileInterests} />
        <InterestForm addInterest={this.newInterest}/>
      </div>
      )
  }
});

module.exports = App;