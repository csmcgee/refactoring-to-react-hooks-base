import { createServer } from 'miragejs';
import { Response } from 'miragejs';

export function makeMockData() {
  /* ONLY FOR DEVELOPMENT! DON'T IMPORT IN PRODUCTION */
  const Series = require("time-series-data-generator");

  const from = "2020-01-01T16:30:41Z";
  const until = "2020-05-01T18:30:00Z";
  const interval = 43200;
  const keyName = "amount";

  const salesSeries = new Series({ from, until, interval, keyName });
  let sales = salesSeries.gaussian({
    mean: 360,
    variance: 10,
    decimalDigits: 0
  });

  const subscriptionsSeries = new Series({ from, until, interval, keyName });
  let subscriptions = subscriptionsSeries.gaussian({
    mean: 9,
    variance: 5,
    decimalDigits: 0
  });

  return {sales, subscriptions};
}

export function makeServer({ environment = "development" }) {
  const server = createServer({ environment });
  const {sales, subscriptions} = makeMockData();
  server.namespace = process.env.REACT_APP_BASE_URL;
  server.get("/error", new Response(500, { errors: ['Internal server error.']}));
  server.get("/sales", sales);
  server.get("/subscriptions", subscriptions);
  const salesTotal = sales.reduce((previousValue, {amount}) => {
    return previousValue + amount;
  }, 0);
  const subscriptionsTotal = subscriptions.reduce((previousValue, {amount}) => {
    return previousValue + amount;
  }, 0);
  server.get("/totals", { salesTotal, subscriptionsTotal});
}

if (process.env.NODE_ENV === "development") {
  if (!window.Cypress) {
    makeServer({});
  }
}
