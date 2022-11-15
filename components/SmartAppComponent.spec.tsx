import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider, useSelector, useDispatch } from 'react-redux'

import SmartAppComponent from './SmartAppComponent';
import { store } from '../src/store';
import { addList } from '../src/features/slice';

describe('SmartAppComponent', () => {
  const InitialComponent = () => {
    const dispatch = useDispatch();
    dispatch(addList(['comic 1']));

    return <SmartAppComponent />
  }
  it('given a provider with a comic on the list, counter should be 1', () => {

    render(<Provider store={store}><InitialComponent /></Provider>);

    expect(document.querySelector('span')).toHaveTextContent('1');
  });
});