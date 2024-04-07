/* eslint-disable react/prop-types */
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { MINUS } from '../lib/constants';

export function CountButton({ setCount, type, locked }) {
  const handleClickButton = (e) => { 
    setCount(prev => {
      if (type === MINUS) {
        return prev > 0 ? prev - 1 : 0;
      } else {
        const newCount = prev + 1;
        if (newCount > 10) return 10;

        return newCount;
      }
    });

    e.currentTarget.blur();
  }

  const buttonIcon = (type) => {
    return type === MINUS ?
      <MinusIcon className="count-btn-icon" /> :
      <PlusIcon className="count-btn-icon" />;
  }
  
  return (
    <button
      aria-label={type}
      className="count-btn"
      disabled={locked}
      onClick={handleClickButton}
    >
      {buttonIcon(type)}
    </button>
  );
}
