// App.jsx
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { useTheme } from './contexts/ThemeContext';

// Component that uses context
function MainContent() {
  const { isDark } = useTheme();
  
  return (
    <div style={{
      padding: '20px',
      minHeight: '100vh',
      background: isDark ? '#1a1a1a' : '#ffffff',
      color: isDark ? '#fff' : '#000'
    }}>
      <Profile />
    </div>
  );
}

function App() {
  return (
    // Providers wrap the entire app
    <ThemeProvider>
      <UserProvider>
        <div>
          <Header />
          <MainContent />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;