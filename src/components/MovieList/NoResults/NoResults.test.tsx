import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import NoResults from './NoResults';
import { messages } from './NoResults.i18n.ts';

const renderWithIntl = (ui: React.ReactElement) => {
  return render(
    <IntlProvider locale="en" messages={messages}>
      {ui}
    </IntlProvider>
  );
};

test('renders NoResults component with correct title and label', () => {
  const formatMessageMock = jest.fn((message) => message.defaultMessage);

  renderWithIntl(<NoResults intl={{ formatMessage: formatMessageMock }} />);

  // Check if the title text is rendered correctly
  const titleElement = screen.getByText(messages.noMovingFoundTitle.defaultMessage);
  expect(titleElement).toBeInTheDocument();

  // Check if the label text is rendered correctly
  const labelElement = screen.getByText(messages.noMovingFoundLabel.defaultMessage);
  expect(labelElement).toBeInTheDocument();
});
