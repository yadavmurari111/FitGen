import {action, makeAutoObservable, observable, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const CURRENT_LOGIN_USER = '@LoggedInUser';

class UserProfileDataStore {
  LoggedInUserData = {
    isLoading: <boolean>true,
    user: <FirebaseAuthTypes.UserCredential | null>null,
  };

  constructor() {
    makeAutoObservable(this, {
      LoggedInUserData: observable,
      setProfileData: action.bound,
    });
  }

  async setProfileData(data: FirebaseAuthTypes.UserCredential) {
    const LoggedInUserData = {
      isLoading: false,
      user: data,
    };

    runInAction(() => {
      this.LoggedInUserData = LoggedInUserData;
    });
  }
}

// Instantiate the counter store.
export const userProfileDataStore = new UserProfileDataStore();

// Create a React Context with the counter store instance.
export const UserProfileDataContext = createContext(userProfileDataStore);
export const useUserProfileDataStore = () => useContext(UserProfileDataContext);
