import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('renders title', () => {
    const { getByText } = render(<App />);
    expect(getByText('学习首页')).toBeDefined();
  });
});