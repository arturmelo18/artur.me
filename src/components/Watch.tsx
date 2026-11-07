
import { useState, useEffect } from 'react';

export default function Watch() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString('pt-BR'));

  useEffect(() => {
  
    const interval = setInterval(() => {
      setHour(new Date().toLocaleTimeString('pt-BR'));
    }, 1000);

  
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <span>{hour}</span>
    </div>
  );
}