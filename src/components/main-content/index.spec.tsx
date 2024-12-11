import MainContent from './';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MainContent', () => {
  it('should render properly', async () => {
    render(<MainContent />);
  });
});
