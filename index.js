const fastify = require('fastify')();
const { ADDRESS = 'localhost', PORT = '3000' } = process.env;

fastify.get('/', async (request, reply) => {
  return { message: 'Hello old friend...' };
});

fastify.listen({ host: ADDRESS, port: parseInt(PORT, 10)}, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`FastServer listening on ${address}...`);
});
