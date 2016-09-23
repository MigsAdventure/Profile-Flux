//Interacts with names. Actions creaters
import AppDispatcher from '../AppDispatcher'


const ProfileActions = {
  profileName(name) {
    AppDispatcher.dispatch({
      type: 'CREATE_NAME',
      payload: {name},     
    });

  },

  profileBio(bio) {
    AppDispatcher.dispatch({
      type: 'CREATE_BIO',
      payload: {bio}
    });
  },

  profilePic(pic){
    AppDispatcher.dispatch({
      type: 'CREATE_PIC',
      payload:{pic}
    });
  }
}

export default ProfileActions;