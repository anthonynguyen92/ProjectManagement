export const environment = {
  production: true,
  application: {
    name: 'ProjectManagement',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44338',
    clientId: 'ProjectManagement_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'ProjectManagement',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44338',
    },
  },
  localization: {
    defaultResourceName: 'ProjectManagement',
  },
};
