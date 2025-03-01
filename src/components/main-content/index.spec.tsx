import MainContent from './';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppProvidersTest from '../../utils/test/app-providers-test';

describe('MainContent', () => {
  it('should render properly', async () => {
    render(
      <AppProvidersTest>
        <MainContent />
      </AppProvidersTest>,
    );
  });
});
