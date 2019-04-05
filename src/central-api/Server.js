import ENV from './environment';

import http from 'http';

export const start = async (app) => {
  http.createServer(app).listen(ENV.app.port, () => {
    console.log(`central api listen port ${ENV.app.port}`);
  });
};
