import React from 'react';
import {AuthProvider} from './auth.service';
import {Routes} from './../../components/routes.component';

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
