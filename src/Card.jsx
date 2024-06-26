import { useEffect, useState } from 'react';
import { Count } from './Count';
import { ButtonContainer } from './ButtonContainer';
import { ResetButton } from './ResetButton';
import { Title } from './Title';
import { CountButton } from './CountButton';
import { COUNT_MAX, MINUS, PLUS } from '../lib/constants';


export function Card() {
  const [count, setCount] = useState(0);
  const locked = count === COUNT_MAX ? true : false;

  useEffect(() => {
    function handleKeyPressSpacebar(e) {
      if (e.code === 'Space') {
        const newCount = count + 1;
        if (newCount > 10) {
          setCount(10);
          return;
        }
        setCount(newCount);
      }
    }

    window.addEventListener('keydown', handleKeyPressSpacebar);

    return () => window.removeEventListener('keydown', handleKeyPressSpacebar);
  }, [count]);
  
  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type={MINUS} setCount={setCount} locked={locked} />
        <CountButton type={PLUS} setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
