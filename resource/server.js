const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const environment = process.env.NODE_ENV;

const init = async () => {
  const server = Hapi.server({
    port: 8000,
    host: 'localhost',
    routes: {
      cors: true
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
  console.log(`Mode environment: ${environment}`)
};

init();