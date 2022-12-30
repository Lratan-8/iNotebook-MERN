import { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';
export default function About() {

  
  
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>This is about {a.first.name} and is - {a.first.age}</div>
  )
}
