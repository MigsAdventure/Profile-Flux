
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
    //document.getElementById('overlay').style.display = 'hide';
  },

  toggle(e) {
   
},

  render() {
    let {sendToEdit} = this.props;
    console.log("Current image: ", sendToEdit.pic)
   return (
    <div>
        <div id="contentContainer">
          <div className="row col-xs-12">
            <img className="col-xs-4" src={sendToEdit.pic}/>
            <p className="col-xs-8">{sendToEdit.bio}</p>
          </div>
          <div id="imageContainer" className="col-xs-12">
            <h2 className="col-xs-4">{sendToEdit.name}</h2>
          </div>
        </div>
        <form onSubmit={this.submit} id="overLay" className="col-xs-12">
        <div id="overlay">
          <div className="row col-xs-12">
            <input className='col-xs-4'ref="name" type="text" placeholder='Your name' required/>
            <input className='col-xs-8' ref="bio" placeholder='Some info about you' required/>           
          </div>
        <div className="row col-xs-12">
         <input className="col-xs-4" ref="pic" type='text' placeholder='Pic URL' required/>
        </div> 
      </div>
          <button className="btn btn-primary" onClick={this.toggle}>Edit Profile</button>
        </form>
    </div>
    
   ) 
  }
});

module.exports = Profile;