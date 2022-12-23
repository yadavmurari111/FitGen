import {action, makeAutoObservable, observable, runInAction} from 'mobx';
import {createContext, useContext} from 'react';

enum IAppTheme {
  LIGHT,
  DARK,
}

class AppThemeStore {
  appTheme = {
    theme: IAppTheme.LIGHT,
  };

  constructor() {
    makeAutoObservable(this, {
      appTheme: observable,
      setAppTheme: action.bound,
    });
  }

  async setAppTheme(value: IAppTheme) {
    const appTheme = {
      theme: value,
    };

    runInAction(() => {
      this.appTheme = appTheme;
    });
  }
}

// Instantiate the counter store.
export const appThemeStore = new AppThemeStore();

// Create a React Context with the counter store instance.
export const AppThemeContext = createContext(appThemeStore);
export const useAppThemeStore = () => useContext(AppThemeContext);
