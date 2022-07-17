import { useState } from "react";
import { uploadFiles } from "./firebase/config";

function App() {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // throw new Error("Fallo al subir");
      const result = await uploadFiles(file);
      console.log(result);
    } catch (error) {
      console.error(error);
      alert("Fallo interno, Intente más tarde")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        name=""
        id=""
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button>Upload</button>
    </form>
  );
}

export default App;
