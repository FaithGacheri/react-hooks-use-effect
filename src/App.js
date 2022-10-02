import React, { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering");

  return (
     <div>
    <button>Click Me</button>
    <input type="text" placeholder="Type away..." value={text}
        onChange={(e) => setText(e.target.value)} />
  </div>
  )
}

export default App;
