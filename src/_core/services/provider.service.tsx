import React, {useEffect, useState} from 'react';
import {AuthProvider} from './auth.service';
import {Routes} from './../../components/routes.component';
import * as DAL from '../services/database.service';
interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  const [connected, setConnected] = useState<Boolean>(false);

  useEffect(() => {
    DAL.testSetupConnection()
      .then((res) => {
        setConnected(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (connected) {
    return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
    );
  } else {
    return null;
  }
};
