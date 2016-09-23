
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

  toggle(e) {
   
},

  render() {
    let {sendToEdit} = this.props;
    console.log("Current image: ", sendToEdit.pic)
   return (
    <form id="mainContainer" onSubmit={this.submit}>
      <div className="row col-xs-12">
        <div id="imageContainer" className="col-xs-4">
          <img src={sendToEdit.pic}/>
          <input ref="pic" type='text'/>
        </div>
        <div id="bioContainer" type="text" className="col-xs-8">
          <p>{sendToEdit.bio}</p>
          <input ref="bio"/>
        </div>
      </div>
      <div className="row col-xs-12">
        <div id="nameContainer" className="col-xs-4">
          <h2>{sendToEdit.name}</h2>
          <input ref="name" type="text"/>
        </div>
       </div> 
      <button className="btn btn-primary" onClick={this.toggle}>Edit Profile</button>
    </form>
   ) 
  }
});

module.exports = Profile;