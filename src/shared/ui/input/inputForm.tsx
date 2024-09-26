import { FC } from 'react';

interface IProps {
  textLabel?: string;
  placeHolder?: string;
}

/**
 * A form input component.
 *
 * @param {string} [textLabel] - The text to display above the input field.
 * @param {string} [placeHolder] - The text to display as a placeholder in the input field.
 * @returns {JSX.Element} - A form input component.
 */
export const FormInput: FC<IProps> = ({
  textLabel,
  placeHolder,
}): JSX.Element => {
  return (
    <>
      <label className="text-white w-max" htmlFor="input">
        {textLabel ?? 'Enter text'}
      </label>
      <input
        type="text"
        id="note"
        className="w-max bg-violet-400 border-2 border-violet-700 placeholder:text-gray-300"
        placeholder={placeHolder ?? 'Enter text'}
      />
    </>
  );
};
