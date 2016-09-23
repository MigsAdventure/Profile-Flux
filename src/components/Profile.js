
import React from 'react'


const Profile = React.createClass({
  submit(e){
    e.preventDefault();
    let {pic,name,bio} = this.refs;
    let newProfile = {
      name: name.value,
      bio: bio.value,
      pic: pic.value
    }
    this.props.newInfo(newProfile);
  },

  toggle(){

  },


  render() {
    let {sendToEdit} = this.props;
    console.log("Current image: ", sendToEdit.pic)
   return (
    <form id="mainContainer" onSubmit={this.submit}>
      <div class="row">
        <div id="imageContainer">
          <img ref="picSrc" src={sendToEdit.pic}/>
          <input ref="pic" type='text'/>
        </div>
        <div id="bioContainer" type="text">
          <p>{sendToEdit.bio}</p>
          <input ref="bio"/>
        </div>
      </div>
      <div class="row">
        <div id="nameContainer">
          <h2>{sendToEdit.name}</h2>
          <input ref="name" type="text"/>
        </div>
       </div> 
      
      <button className="btn btn-primary">Edit Profile</button>
    </form>
   ) 
  }
});

module.exports = Profile;