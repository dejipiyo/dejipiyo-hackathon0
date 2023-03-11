import '@testing-library/jest-dom/extend-expect';
import { server } from '@/mocks/server';

beforeAll(() => {
  server.listen();
});

afterEach(async () => {
  server.resetHandlers();
  jest.clearAllMocks();
});

afterAll(() => {
  server.close();
});
