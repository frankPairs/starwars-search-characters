import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import { theme } from 'styles';

function renderWithThemeProvider(component) {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
}

export { renderWithThemeProvider };
