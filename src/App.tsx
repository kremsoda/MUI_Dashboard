import {useTheme} from '@mui/material/styles';

import Header from './components/Header';

function App() {

  const theme = useTheme();

  return (
    <>
    <Header/>
      <div style={{
        backgroundColor: theme.palette.primary.main,
        width: '500px',
        height: '500px',
        padding: '20px',
        marginTop: '100px',
      }}>

      </div>
    </>
  );
}

export default App;