import SearchComponent from './';
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('AppComponent', () => {
  it('should have an input with "Search" placeholder', () => {
    render(<SearchComponent count={0} />);


    expect(document.querySelector('input').getAttribute('placeholder')).toBe('Search');
  });

  it('should display total amount of comics', () => {
    render(<SearchComponent count={0} />);


    expect(document.querySelector('span')).toHaveTextContent('0 comics are available');
  });

  it('should display total amount of comics', () => {
    render(<SearchComponent count={1} />);

    expect(document.querySelector('span')).toHaveTextContent('1 comic is available');
  });


  it('should search when 3 letters are written', async () => {
    const user = userEvent.setup();
    const onSearch = jest.fn();
    render(<SearchComponent count={1} onSearch={onSearch} />);

    await user.type(document.querySelector('input'),  '123')

    expect(document.querySelector('input')).toHaveValue('123');
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('should display options when 3 letters are written', async () => {
    const user = userEvent.setup();
    const onSearch = (a) => {

    };
    render(<SearchComponent count={112} onSearch={onSearch} options={['opc 1', 'opc 2']} />);

    await user.type(document.querySelector('input'),  'opc')

    expect(document.querySelector('input')).toHaveValue('opc');
    expect(document.querySelector('div.list')).toHaveTextContent('opc 1')
    expect(document.querySelector('div.list')).toHaveTextContent('opc 2')
  });

  it('should display maximum of 5 options', async () => {
    const user = userEvent.setup();
    const onSearch = (a) => {

    };
    render(<SearchComponent count={12} onSearch={onSearch} options={['opc 1', 'opc 2', 'opc 3', 'opc 4', 'opc 5', 'opc 6']} />);

    await user.type(document.querySelector('input'),  'opc');
    const foundOptions = await screen.findAllByText(/opc /);
    const listElement = document.querySelector('div.list');

    expect(document.querySelector('input')).toHaveValue('opc');
    expect(listElement).toHaveTextContent('opc 1');
    expect(listElement).toHaveTextContent('opc 2');
    expect(listElement).toHaveTextContent('opc 3');
    expect(listElement).toHaveTextContent('opc 4');
    expect(listElement).toHaveTextContent('opc 5');
    expect(foundOptions.length).toEqual(5);
  });

  it('should display no list if not options', async () => {
    const user = userEvent.setup();
    const onSearch = (a) => {

    };
    render(<SearchComponent count={1} onSearch={onSearch} />);

    await user.type(document.querySelector('input'),  'opc')

    expect(document.querySelector('div.list')).toBeNull();
  });

  it('should fire an event when option is clicked', async () => {
    const user = userEvent.setup();
    const onSearch = (a) => {

    };

    const onClickOption = jest.fn();
  
    render(<SearchComponent count={1} onSearch={onSearch} options={['opc 1']} onClickOption={onClickOption} />);

    await user.type(document.querySelector('input'),  'opc')
    
    await user.click(await screen.findByText(/opc /));

    expect(onClickOption).toHaveBeenCalledTimes(1);
  });
});
