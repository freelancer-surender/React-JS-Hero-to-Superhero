import { useRef, useState, useLayoutEffect } from "react";

function App() {

  const boxRef = useRef();

  const [textContent, setTextContent] = useState('Initial Text');

  useLayoutEffect(() => {
    if (boxRef.current.offsetWidth > 300) {
      setTextContent('Updated Text');
    }
  }, []);

  return (
    <div
      className="box"
      ref={boxRef}
      style={{
        width: '400px'        
      }}
    >
      {textContent}
    </div>
  );
}

export default App;
