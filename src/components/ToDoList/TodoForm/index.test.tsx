import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TodoForm from '.';

describe('<TodoForm />', () => {
  const onInsert = jest.fn();

  const setup = (props = { onInsert }) => {
    const utils = render(<TodoForm {...props} />);
    const { getByText, getByPlaceholderText } = utils;
    const input = getByPlaceholderText('할 일을 입력하세요');
    const button = getByText('등록');

    return {
      ...utils,
      input,
      button,
    };
  };

  it('has input and a button', () => {
    const { input, button } = setup();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('changes input', () => {
    const { input } = setup();

    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      },
    });
    expect(input).toHaveAttribute('value', 'TDD 배우기');
  });

  it('calls onInsert and clears input', () => {
    const { input, button } = setup();

    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      },
    });

    fireEvent.click(button);
    expect(onInsert).toBeCalledWith('TDD 배우기');
    expect(input).toHaveAttribute('value', '');
  });
});
