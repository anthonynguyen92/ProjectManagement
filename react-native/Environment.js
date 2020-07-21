const ENV = {
  dev: {
    apiUrl: 'http://localhost:44341',
    oAuthConfig: {
      issuer: 'http://localhost:44341',
      clientId: 'StudentManagementProject_App',
      clientSecret: '1q2w3e*',
      scope: 'StudentManagementProject',
    },
    localization: {
      defaultResourceName: 'StudentManagementProject',
    },
  },
  prod: {
    apiUrl: 'http://localhost:44341',
    oAuthConfig: {
      issuer: 'http://localhost:44341',
      clientId: 'StudentManagementProject_App',
      clientSecret: '1q2w3e*',
      scope: 'StudentManagementProject',
    },
    localization: {
      defaultResourceName: 'StudentManagementProject',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return __DEV__ ? ENV.dev : ENV.prod;
};
