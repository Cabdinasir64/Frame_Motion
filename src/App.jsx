import Animation37 from './Components/animation37'
import Animation38 from './Components/animation38'
import { useState } from 'react';
function App() {
  const [selected, setSelected] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      {!selected ? (
        <Animation37 setSelected={setSelected} />
      ) : (
        <Animation38 setSelected={setSelected} />
      )}
    </div>
  );
}

export default App;