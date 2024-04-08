import { ResetIcon } from '@radix-ui/react-icons';

export function ResetButton({ setCount }) {
  const handleClickReset = (e) => {
    setCount(0);

    e.currentTarget.blur();
  };
  
  return (
    <button
      aria-label='reset-button'
      className="reset-btn"
      onClick={handleClickReset}>
        <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
