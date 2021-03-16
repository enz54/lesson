import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main Title', () => {
  render(<App />) 
  const title = screen.getByRole('heading', {  name: /your lessons library/i});
  expect(title).toBeInTheDocument();
});

test('renders the tag by default', () => {
  render(<App />) 
  const tag = screen.getByRole('button', {  name: /key-stage-4/i});
  expect(tag).toBeInTheDocument();
});
test('renders an empty textbox', () => {
  render(<App />) 
  const textbox = screen.getByRole('textbox');
  expect(textbox).toBeInTheDocument();
});
