import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://961d8fdc2dd6b4b416c06bafdcc4e11b@o4510603751849984.ingest.us.sentry.io/4510603809259520",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});