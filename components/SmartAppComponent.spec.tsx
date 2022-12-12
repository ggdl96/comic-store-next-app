import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider, useSelector, useDispatch } from 'react-redux'
import userEvent from '@testing-library/user-event'

import SmartAppComponent from './SmartAppComponent';
import { store } from '../src/store';
import { addList, fetchOptions } from '../src/features/slice';
import Requester from '../model/Requester';

describe('SmartAppComponent', () => {
  const InitialComponent = () => {
    const dispatch = useDispatch();
    const requester = new Requester(['comic 1', 'comic 2']);

    return <SmartAppComponent requester={requester} />
  }

  it('given a provider with a comic on the list, counter should be 1', () => {
    render(<Provider store={store}><InitialComponent /></Provider>);

    expect(document.querySelector('span')).toHaveTextContent('2 comics are available');
  });

  it('given a selected option, a list of comics should be displayed', async () => {
    const user = userEvent.setup();

    render(<Provider store={store}><InitialComponent /></Provider>);

    // input 3 letters
    await user.type(document.querySelector('input'), 'comic 1');


    // click option
    await user.click(await screen.findByText(/comic 1/));

    const foundList = await screen.findAllByText(/comic 1/);

    expect(screen.queryByTestId('ul-list')).toBeTruthy();
    expect(screen.queryByTestId('item-comic 1')).toBeTruthy();
  });
});