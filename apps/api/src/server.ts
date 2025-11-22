import Fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();

const server = Fastify({ logger: true });

server.get('/api/ping', async () => {
  return { message: 'pong' };
});

server.setErrorHandler((error, request, reply) => {
  request.log.error(error);
  reply.code(500).send({ message: '服务内部错误' });
});

const port = Number(process.env.PORT || 3001);
server
  .listen({ port })
  .then((address) => {
    server.log.info(`服务已启动: ${address}`);
  })
  .catch((err) => {
    server.log.error(err);
    process.exit(1);
  });