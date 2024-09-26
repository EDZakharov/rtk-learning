import { FC } from 'react';

interface IProps {
  textLabel?: string;
  onClick?: () => void;
}

/**
 * A button component that is styled like an input field.
 *
 * @param {string} [textLabel] - The text to display on the button.
 * @param {() => void} [onClick] - The function to call when the button is clicked.
 * @returns {JSX.Element} - A button component.
 */
export const InputSubmitButton: FC<IProps> = ({
  textLabel,
  onClick,
}): JSX.Element => {
  return (
    <button
      className="w-max bg-violet-400 border-2 border-violet-700 placeholder:text-gray-300"
      onClick={onClick}
    >
      {textLabel}
    </button>
  );
};
