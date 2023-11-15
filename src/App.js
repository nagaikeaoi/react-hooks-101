import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count +1);
  const decrement = () => setCount(count -1);

  const increment2 = () => setCount(previousCount => previousCount +1);
  const decrement2 = () => setCount(previousCount => previousCount -1);

  const reset = () => setCount(0);

  // 二倍にする関数
  // const multiply = () => setCount(count * 2);
  const multiply = () => setCount(previousCount => previousCount * 2);

  // 3の倍数のときだけ3で割った数を表示する関数
  const divide3 = () => setCount(previousCount => {
    if (previousCount % 3 === 0) {
      return previousCount / 3
    } else {
      return previousCount
    }
  })

  return (
    <>
      <div>
       count: {count}
     </div>
      <div>
       <button onClick={increment}>+1</button>
       <button onClick={decrement}>-1</button>
      </div>
     <div>
       <button onClick={increment2}>+1</button>
       <button onClick={decrement2}>-1</button>
     </div>

     <div>
        <button onClick={reset}>Reset</button>
        <button onClick={multiply}>×2</button>
        <button onClick={divide3}>三の倍数のときだけ三で割る</button>
     </div>
    </>
  );
}

export default App;