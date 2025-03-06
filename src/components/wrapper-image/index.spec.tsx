import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import WrapperImage from './index';

// Mock next/image to simply render an img element
// eslint-disable-next-line react/display-name
jest.mock('next/image', () => (props: React.JSX.IntrinsicAttributes) => <img {...props} />);

describe('WrapperImage component', () => {
  const defaultSrc = '/comic-default.png';

  it('renders with default src when no src prop is provided', () => {
    render(<WrapperImage src={undefined as any} alt="default image" />);
    const image = screen.getByAltText('default image');

    expect(image.getAttribute('src')).toBe(defaultSrc);
  });

  it('renders with provided src prop', () => {
    const customSrc = '/custom-image.png';
    render(<WrapperImage src={customSrc} alt="custom image" />);
    const image = screen.getByAltText('custom image');
    // Because of useEffect behavior, state gets updated to provided src
    expect(image.getAttribute('src')).toBe(customSrc);
  });

  it('falls back to default src when error occurs', () => {
    const faultySrc = '/faulty-image.png';
    const onErrorMock = jest.fn();
    render(<WrapperImage src={faultySrc} alt="faulty image" onError={onErrorMock} />);
    const image = screen.getByAltText('faulty image');

    // Simulate error event
    fireEvent.error(image);

    // Check if error handler got called and src reverted to default
    expect(onErrorMock).toHaveBeenCalled();
    // The image src should be updated to default fallback image
    expect(image.getAttribute('src')).toBe(defaultSrc);
  });
});
