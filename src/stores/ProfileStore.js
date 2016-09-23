import AppDispatcher from '../AppDispatcher';
import {EventEmitter} from 'events';


let _profileInfo = {
  name: 'Miguel Pardo',
  bio: 'I love coding and longboarding! This is a sample bio.',
  pic: 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/12745915_1303263976366835_6067711188026501456_n.jpg?oh=1ad048f060b061a4b32ae1f58ad593c9&oe=586A2E63'
}

let _profileInterests = [];

const ProfileStore = Object.assign({},EventEmitter.prototype, {
  startListening(callback) {
    this.on('CHANGE', callback); 
  },

  stopListening(callback) {
    this.on("CHANGE", callback);
  },

  getAll() {
     return _profileInfo;
  },

  getInterest() {
    return _profileInterests;
  }
});

AppDispatcher.register(action =>  {
  const {type, payload} = action;
  let {name,bio,pic,interest} = payload;
  switch(type) {
    case  'CREATE_NAME':
      _profileInfo.name = name;
      ProfileStore.emit('CHANGE');
      console.log("new name in AppDispatcher: ", _profileInfo.name);
      break;
      case 'CREATE_BIO':
      _profileInfo.bio = bio;
      ProfileStore.emit('CHANGE');
      break;
      case 'CREATE_PIC':
      _profileInfo.pic = pic;
      ProfileStore.emit('CHANGE');
      break;
      case 'CREATE_INTEREST':
      _profileInterests.push(interest);
      ProfileStore.emit('CHANGE');
      break;
  }
})


export default ProfileStore;