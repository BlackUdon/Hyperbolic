import React, {useEffect, useState} from 'react';
import {AuthProvider} from './auth.service';
import {Routes} from './../../components/routes.component';
import * as DBConnector from '../services/database.service';
interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  const [connected, setConnected] = useState<Boolean>(false);
  console.log('===ProviderService===');
  useEffect(() => {
    DBConnector.setDBConnection()
      .then((res) => {
        setConnected(true);
        console.log(res);
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
    return <></>;
  }
};
