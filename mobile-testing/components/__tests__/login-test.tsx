// components/__tests__/login-test.tsx
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../app/login'; // Sesuaikan dengan path yang benar

describe('Login Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
