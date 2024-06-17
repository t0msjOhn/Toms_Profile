import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Loading from './components/LoadUI/Loading';

function App() {
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const timer =setTimeout(() => {
      setLoading(false)
    },2000);
    return ()=>clearTimeout(timer)
  },[])
  return (
    <>
      {loading?(
        <Loading/>
        ):(
          <div>
      <header className="sticky top-0 z-10 bg-white shadow">
        <Header />
      </header>
      <Introduction />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
        )}
    </>
  );
}

export default App;
