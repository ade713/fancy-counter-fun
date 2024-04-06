import { ResetIcon } from '@radix-ui/react-icons';

export function ResetButton({ setCount }) {
  const handleClickReset = (e) => {
    setCount(0);

    e.currentTarget.blur();
  };
  
  return (
    <button className="reset-btn">
      <ResetIcon className="reset-btn-icon" onClick={handleClickReset} />
    </button>
  );
}
