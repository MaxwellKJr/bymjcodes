import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://961d8fdc2dd6b4b416c06bafdcc4e11b@o4510603751849984.ingest.us.sentry.io/4510603809259520",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  integrations: [
    Sentry.replayIntegration(),
  ],
  // Enable logs to be sent to Sentry
  enableLogs: true,
  // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysSessionSampleRate: 0.1,
  // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  replaysOnErrorSampleRate: 1.0,
});