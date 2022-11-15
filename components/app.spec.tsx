import AppComponent from './app';
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'

describe('AppComponent', () => {
  it('should have an input with "Buscar" placeholder', () => {
    render(<AppComponent count={0} />);


    expect(document.querySelector('input').getAttribute('placeholder')).toBe('Search');
  });

  it('should display total amount of comics', () => {
    render(<AppComponent count={0} />);


    expect(document.querySelector('span')).toHaveTextContent('0 comics are available');
  });

  it('should display total amount of comics', () => {
    render(<AppComponent count={1} />);

    expect(document.querySelector('span')).toHaveTextContent('1 comic is available');
  });
});
