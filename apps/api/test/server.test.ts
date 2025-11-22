import { describe, it, expect } from 'vitest';
import Fastify from 'fastify';

describe('api ping', () => {
  it('returns pong', async () => {
    const app = Fastify();
    app.get('/api/ping', async () => ({ message: 'pong' }));
    const res = await app.inject({ method: 'GET', url: '/api/ping' });
    expect(res.statusCode).toBe(200);
    const data = res.json();
    expect(data.message).toBe('pong');
  });
});