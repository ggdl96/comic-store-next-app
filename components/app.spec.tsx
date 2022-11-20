import AppComponent from './app';
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

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


  it('should search when 3 letters are written', async () => {
    const user = userEvent.setup();
    const onSearch = jest.fn();
    render(<AppComponent count={1} onSearch={onSearch} />);

    await user.type(document.querySelector('input'),  '123')

    expect(document.querySelector('input')).toHaveValue('123');
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('should display options when 3 letters are written', async () => {
    const user = userEvent.setup();
    const onSearch = (a) => {

    };
    render(<AppComponent count={112} onSearch={onSearch} options={['opc 1', 'opc 2']} />);

    await user.type(document.querySelector('input'),  'opc')

    expect(document.querySelector('input')).toHaveValue('opc');
    expect(document.querySelector('div.list')).toHaveTextContent('opc 1')
    expect(document.querySelector('div.list')).toHaveTextContent('opc 2')
  });

  it('should display maximum of 5 options', async () => {
    const user = userEvent.setup();
    const onSearch = (a) => {

    };
    render(<AppComponent count={12} onSearch={onSearch} options={['opc 1', 'opc 2', 'opc 3', 'opc 4', 'opc 5', 'opc 6']} />);

    await user.type(document.querySelector('input'),  'opc')

    expect(document.querySelector('input')).toHaveValue('opc');
    expect(document.querySelector('div.list')).toHaveTextContent('opc 1');
    expect(document.querySelector('div.list')).toHaveTextContent('opc 2');
    expect(document.querySelector('div.list')).toHaveTextContent('opc 3');
    expect(document.querySelector('div.list')).toHaveTextContent('opc 4');
    expect(document.querySelector('div.list')).toHaveTextContent('opc 5');
    expect(await (await screen.findAllByText(/opc /)).length).toEqual(5);
  });

  it('should display no list if not options', async () => {
    const user = userEvent.setup();
    const onSearch = (a) => {

    };
    render(<AppComponent count={1} onSearch={onSearch} />);

    await user.type(document.querySelector('input'),  'opc')

    expect(document.querySelector('input')).toHaveValue('opc');
    expect(document.querySelector('div.list')).toBeNull();
  });
});
