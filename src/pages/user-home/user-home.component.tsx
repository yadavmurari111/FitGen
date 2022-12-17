import React, {FunctionComponent} from 'react';
import UserHomeTemplate from './user-home.template';
import IUserHomeInterface from './user-home.interface';

const UserHomeComponent: FunctionComponent<IUserHomeInterface> = () => {
  return <UserHomeTemplate />;
};
export default UserHomeComponent;
