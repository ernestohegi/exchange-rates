const express = require('express');
const next = require('next');
const fetch = require('isomorphic-fetch');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT;
const app = next({ dev });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express()

        server.get('/', (req, res) => {
            const actualPage = '/rates';
            app.render(req, res, actualPage);
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    })
