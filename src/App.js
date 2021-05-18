import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Content from './components/Content'

function App() {
  return (
    <div style={{display:"flex"}} >
      <Sidebar/>
      <section>
        <Navbar/>
        <Content/>
      </section>
    </div>
  );
}

export default App;
