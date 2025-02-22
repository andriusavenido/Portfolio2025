import './index.css'

import Landing from './sections/Landing'
import Education from './sections/Education'
import Experience from './sections/Experience'

const App: React.FC =()=> {
  
  return (
    <div className=''>
      <Landing></Landing>
      <Education></Education>
      <Experience></Experience>
    </div>
  )
}

export default App;
