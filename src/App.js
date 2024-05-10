import React from 'react';

function App() {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    console.log(file); //logs file
    reader.onload = (event) => {
      const text = event.target.result;
      console.log(text) //to read the content inside the file
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
}

export default App;
