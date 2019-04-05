import * as Server from './Server';

import app from './app';

app.get('/', (req, res) => res.send('Hello World!'));

Server.start(app);
