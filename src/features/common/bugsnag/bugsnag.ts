import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';
import getConfig from 'next/config';
import React from 'react';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const bugsnagClient = bugsnag({
  apiKey:
    serverRuntimeConfig.BUGSNAG_API_KEY || publicRuntimeConfig.BUGSNAG_API_KEY,
});
bugsnagClient.use(bugsnagReact, React);

export default bugsnagClient;
