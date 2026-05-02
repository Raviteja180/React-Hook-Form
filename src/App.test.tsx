import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('should have "Raviteja" as the default value for fullName', () => {
    render(<App />);
    const fullNameInput = screen.getByDisplayValue('Raviteja');
    expect(fullNameInput).toBeInTheDocument();
  });
});
