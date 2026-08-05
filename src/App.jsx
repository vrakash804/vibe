import PillNav from './PillNav';
import './App.css';
import logo from '../assets/favicon.png';

function App() {
  return (
    <div className="app">
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' }
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
      <main className="app-content">
        <h1>Vibe React App</h1>
        <p>This is a minimal React app demonstrating the PillNav component.</p>
      </main>
    </div>
  );
}

export default App;
