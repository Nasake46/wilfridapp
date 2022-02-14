import { BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './Pages/Login';
import InformationsPage from './Pages/Informations';
import RegisterPage from './Pages/Register';
import { StorageProvider } from './Providers/StorageProvider';
import UpdatePage from './Pages/Update';


function App() {
  return (
    <StorageProvider>
        <BrowserRouter>

            <Routes>
                
                <Route path="/login" element={<LoginPage/>} > </Route>
                <Route path="/register" element={<RegisterPage/>} > </Route>
                <Route path="/Informations" element={<InformationsPage/>} > </Route>
                <Route path="/update" element={<UpdatePage/>} > </Route>

            </Routes>

        </BrowserRouter>
    </StorageProvider>
    );
}

export default App;
