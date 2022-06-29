import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '@/components/App';

describe('<App />', () => {
  it('renders component correctly', () => {
    render(<App />);

    const text = screen.getByText(/App/i);
    expect(text).toBeInTheDocument();
  });
});
