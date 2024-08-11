import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event'

import SmartAppComponent from './SmartAppComponent';
import { store, sagaMiddleware } from '../store';
import RequesterSuccess from '../model/RequesterSuccess';
import buildSaga from '../features/sagas';
import { ComicStore } from '../model/ComicStore/ComicStore';

describe('SmartAppComponent', () => {
  const InitialComponent = ({ comicStore }: { comicStore: ComicStore }) => {
    return <SmartAppComponent comicStore={comicStore} />
  }

  it('given a provider with a comic on the list, counter should be 1', async () => {
    const requester = new RequesterSuccess(['comic 1']);
    const comicStore = new ComicStore(requester);

    sagaMiddleware.run(buildSaga(comicStore))


    render(<Provider store={store}><InitialComponent comicStore={comicStore}  /></Provider>);

    const counterElement = await screen.findByTestId('comics-counter');
    expect(counterElement).toHaveTextContent('1 comic is available');
  });

  it('given a selected option, a list of comics should be displayed', async () => {
    const requester = new RequesterSuccess(['comic 1', 'comic 2']);
    const comicStore = new ComicStore(requester);

    sagaMiddleware.run(buildSaga(comicStore))

    const user = userEvent.setup();

    render(<Provider store={store}><InitialComponent comicStore={comicStore} /></Provider>);

    const _input = await screen.findByTestId('input');
    // input 3 letters
    await user.type(_input, 'comic 1');

    // click option
    await user.click(await screen.findByText(/comic 1/));

    const foundList = await screen.findAllByText(/comic 1/);
    const foundListItem = await screen.findByTestId('item-comic 1');

    expect(foundList).toBeTruthy();
    expect(foundListItem).toBeTruthy();
  });
});