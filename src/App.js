import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import EmployeeAvailable from './Pages/Dashboard/AvailableWorkers/AvailableWorkers';
import BusyWorkers from './Pages/Dashboard/BusyWorkers/BusyWorkers';
import Customers from './Pages/Dashboard/Customers/Customers';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome/DashboardHome';
import ToLets from './Pages/Dashboard/ToLets/ToLets';
import WorkerList from './Pages/Dashboard/WorkerList/WorkerList';
import WorkerRequests from './Pages/Dashboard/WorkerRequests/WorkerRequests';
import Home from './Pages/Home/Home/Home';
import ServiceHome from './Pages/ServicesPage/ServicesHome/ServicesHome';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />

                    {/* services route */}
                    <Route path="/services/:serviceName" element={<ServiceHome />} />

                    {/* dashboard routes */}
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="/dashboard" element={<DashboardHome />} />
                        <Route path="/dashboard/workers" element={<WorkerList />} />
                        <Route path="/dashboard/customers" element={<Customers />} />
                        <Route path="/dashboard/worker-requests" element={<WorkerRequests />} />
                        <Route path="/dashboard/to-lets" element={<ToLets />} />
                        <Route
                            path="/dashboard/available-workers"
                            element={<EmployeeAvailable />}
                        />
                        <Route path="/dashboard/busy-workers" element={<BusyWorkers />} />
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
