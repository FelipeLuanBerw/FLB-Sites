import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProjectRoutes from './routes';
import Header from './components/header/headerHook';
import GlobalStyles from './styles/GlobalStyles';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    toast.info('Versão Beta!');
  }, []);

  return (
    <Router>
      <Header />
      <ProjectRoutes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} icon={false} hideProgressBar={true} />
    </Router>
  );
}

export default App;
