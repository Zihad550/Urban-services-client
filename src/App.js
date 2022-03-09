import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome/DashboardHome';
import WorkerList from './Pages/Dashboard/WorkerList/WorkerList';
import Home from './Pages/Home/Home/Home';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />

                    {/* dashboard routes */}
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="/dashboard" element={<DashboardHome />} />
                        <Route path="/dashboard/workerList" element={<WorkerList />} />
                    </Route>

                    {/* authentication routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
