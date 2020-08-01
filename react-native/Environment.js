const ENV = {
  dev: {
    apiUrl: 'http://localhost:44338',
    oAuthConfig: {
      issuer: 'http://localhost:44338',
      clientId: 'ProjectManagement_App',
      clientSecret: '1q2w3e*',
      scope: 'ProjectManagement',
    },
    localization: {
      defaultResourceName: 'ProjectManagement',
    },
  },
  prod: {
    apiUrl: 'http://localhost:44338',
    oAuthConfig: {
      issuer: 'http://localhost:44338',
      clientId: 'ProjectManagement_App',
      clientSecret: '1q2w3e*',
      scope: 'ProjectManagement',
    },
    localization: {
      defaultResourceName: 'ProjectManagement',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return __DEV__ ? ENV.dev : ENV.prod;
};
