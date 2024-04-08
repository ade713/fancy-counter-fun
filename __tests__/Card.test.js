import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import { Card } from '../src/Card';
import { CARD_TITLE, MINUS, PLUS } from '../lib/constants';


describe("Card.js", () => {
  it("renders the Card component", () => {
    render(<Card />);

    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent(CARD_TITLE);
  });

  it("plus button increases the counter value", async () => {
    render(<Card />);

    expect(screen.getByText(0)).toBeVisible();

    const plusButton = screen.getByRole('button', {name: PLUS});
    await userEvent.click(plusButton);
    expect(screen.getByText(1)).toBeVisible();
  });

  it("minus button descreases the counter value", async () => {
    render(<Card />);

    const plusButton = screen.getByRole('button', {name: PLUS});
    await userEvent.click(plusButton);
    await userEvent.click(plusButton);
    expect(screen.getByText(2)).toBeVisible();

    const minusButton = screen.getByRole('button', {name: MINUS});
    await userEvent.click(minusButton);
    expect(screen.getByText(1)).toBeVisible();
  });

  describe("counter at count limit", () => {
    it("locks the counter buttons and reset button resets counter", async () => {
      render(<Card />);

      const plusButton = screen.getByRole('button', {name: PLUS});
      for (let i = 1; i <= 10; i++) {
        await userEvent.click(plusButton);
      }
      expect(screen.getByText(10)).toBeVisible();
      expect(screen.getByRole('heading')).toHaveTextContent('Limit!');

      expect(plusButton).toBeDisabled();
      const minusButton = screen.getByRole('button', {name: MINUS});
      expect(minusButton).toBeDisabled();

      const resetButton = screen.getByRole('button', {name: 'reset-button'});
      await userEvent.click(resetButton);

      expect(screen.getByText(0)).toBeVisible();
      expect(plusButton).not.toBeDisabled();
      expect(minusButton).not.toBeDisabled();
    });
  });
});
