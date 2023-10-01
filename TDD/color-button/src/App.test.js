import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const button = screen.getByRole('button',{name:'change to blue!'});

  fireEvent.click(button);

  expect(button).toHaveStyle({backgroundColor:'red'});
  expect(button.textContent).toBe('change to red!');
  
});
