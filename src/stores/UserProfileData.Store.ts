import {action, makeAutoObservable, observable} from 'mobx';
import {createContext, useContext} from 'react';

export const CURRENT_LOGIN_USER = '@LoggedInUser';

class UserProfileDataStore {
  zingUser = {
    isLoading: <boolean>true,
    authToken: <string | null>null,
    user: <null>null,
  };

  constructor() {
    makeAutoObservable(this, {
      zingUser: observable,
      setProfileData: action.bound,
    });
  }

  async setProfileData() {}
}

// Instantiate the counter store.
export const userProfileDataStore = new UserProfileDataStore();

// Create a React Context with the counter store instance.
export const UserProfileDataContext = createContext(userProfileDataStore);
export const useUserProfileDataStore = () => useContext(UserProfileDataContext);
