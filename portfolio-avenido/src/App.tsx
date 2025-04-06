import './index.css'

import Landing from './sections/Landing'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Projects from './sections/Projects'

const App: React.FC =()=> {
  
  return (
    <div className='flex flex-col gap-8'>
      <Landing></Landing>
      <Education></Education>
      <Experience></Experience>
      <Projects></Projects>
    </div>
  )
}

export default App;
