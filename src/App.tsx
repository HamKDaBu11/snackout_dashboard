import { Box } from '@mui/material';
import './App.scss';
import SideNavigation from './components/SideNavigation/SideNavigation';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideNavigation />
      <TransactionHistory />
    </Box>
  );
}

export default App;
