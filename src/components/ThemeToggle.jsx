import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button onClick={toggleTheme} style={{
      padding: '10px 20px',
      background: isDark ? '#333' : '#eee',
      color: isDark ? '#fff' : '#000',
      border: '1px solid #ccc',
      borderRadius: '5px',
      cursor: 'pointer'
    }}>
      Current: {theme} mode
    </button>
  );
}