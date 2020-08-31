import React from 'react';
import {AuthProvider} from './auth.service';
import {Routes} from './../../components/routes.component';
import {DAL} from '../services/database.service';
interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  DAL();
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
