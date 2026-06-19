// components/Profile.jsx
import { useUser } from '../contexts/useUser';
import { useTheme } from '../contexts/useTheme';

export function Profile() {
  const { user, login } = useUser();
  const { isDark } = useTheme();

  if (!user) {
    return (
      <div style={{
        padding: '20px',
        background: isDark ? '#333' : '#f0f0f0',
        borderRadius: '8px'
      }}>
        <h3>Please login</h3>
        <button onClick={() => login({ name: 'John Doe', email: 'john@example.com' })}>
          Login
        </button>
      </div>
    );
  }

  return (
    <div style={{
      padding: '20px',
      background: isDark ? '#333' : '#f0f0f0',
      borderRadius: '8px'
    }}>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Status: {user.loggedIn ? 'Logged In' : 'Logged Out'}</p>
    </div>
  );
}
