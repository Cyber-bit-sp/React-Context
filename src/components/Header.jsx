// components/Header.jsx
import { useUser } from '../contexts/UserContext';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const { user, logout } = useUser();

  return (
    <header style={{
      padding: '20px',
      borderBottom: '1px solid #ccc',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1>My App</h1>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        {user && (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}