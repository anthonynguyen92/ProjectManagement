export const environment = {
  production: true,
  application: {
    name: 'StudentManagementProject',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44341',
    clientId: 'StudentManagementProject_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'StudentManagementProject',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44341',
    },
  },
  localization: {
    defaultResourceName: 'StudentManagementProject',
  },
};
