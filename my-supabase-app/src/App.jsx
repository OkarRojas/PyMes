import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('prueba').select('*');

      console.log(data, error); // Para ver resultados en consola
      if (error) {
        setError(error.message);
      } else {
        setData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Datos desde Supabase</h1>
      {error && <p>Error: {error}</p>}
      {data.length === 0 && !error && <p>No hay datos en la tabla.</p>}
      {data && data.map(item => (
        <li key={item.id}>{JSON.stringify(item)}</li>
      ))}
    </div>
  );
}

export default App;


