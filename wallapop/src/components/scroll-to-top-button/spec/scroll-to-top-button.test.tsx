import React from 'react';
import { render} from '@testing-library/react';
import { ScrollToTopButton } from '../scroll-to-top-button';

// Was not able to set the window.scrollY value to something like 2000. JSDOM does not allow this

describe('ScrollToTopButton', () => {
  beforeEach(() => {
    jest.spyOn(window, 'scrollTo').mockImplementation(jest.fn());

  });

  afterEach(() => {
    jest.restoreAllMocks();

  });

  it('should not render the component when not scrolling', () => {
    window.scrollY = 0;

    const { queryByTestId } = render(<ScrollToTopButton />);
    const scrollButton = queryByTestId('scroll-button');

    expect(scrollButton).not.toBeInTheDocument();
  });
});
