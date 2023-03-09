import React, { useContext, useState } from 'react';

// Create the context object
const ThemeContext = React.createContext();

// A component that provides the context
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// A component that consumes the context
function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
      Change Theme
    </button>
  );
}

// A component that also consumes the context
function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white', padding: '20px' }}>
      <p> This is a Content Box. Changed the Display {theme} mode.</p>
      <Button />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;