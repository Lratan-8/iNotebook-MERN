import { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';
export default function About() {

  
  
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  
  }, [])
  return (
    <div>This is about {a.first.name} and is - {a.first.age}</div>
  )
}
