import AppComponent from './app';
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'

describe('AppComponent', () => {
  beforeEach(async () => {
  });

  it(`should have as title 'Comics Store App'`, async () => {
    render(<AppComponent />);


    expect(document.querySelector('span')).toHaveTextContent('0');
    // const app = fixture.componentInstance;
  
    // expect(app.title).toEqual('Comics Store App');
  });

  it('should have an input with "Buscar" placeholder', () => {
    render(<AppComponent />);


    expect(document.querySelector('input').getAttribute('placeholder')).toBe('Buscar');
  });

  it('should display total amount of comics', () => {
    render(<AppComponent />);


    expect(document.querySelector('span')).toHaveTextContent('0');
  });
});
