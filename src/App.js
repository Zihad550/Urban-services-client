import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AuthProvider from './context/AuthProvider';
import AdminRoute from './Pages/Authentication/AdminRoute/AdminRoute';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import UserRoute from './Pages/Authentication/UserRoute/UserRoute';
import WorkerRoute from './Pages/Authentication/WorkerRoute/WorkerRoute';
import AdminAddService from './Pages/Dashboards/AdminDashboard/AdminAddService/AdminAddService';
import AdminAddWorker from './Pages/Dashboards/AdminDashboard/AdminAddWorker/AdminAddWorker';
import AdminDashboard from './Pages/Dashboards/AdminDashboard/AdminDashboard/AdminDashboard';
import AdminDashboardHome from './Pages/Dashboards/AdminDashboard/AdminDashboardHome/AdminDashboardHome/AdminDashboardHome';
import AvailableWorkers from './Pages/Dashboards/AdminDashboard/AvailableWorkers/AvailableWorkers';
import BusyWorkers from './Pages/Dashboards/AdminDashboard/BusyWorkers/BusyWorkers';
import Customers from './Pages/Dashboards/AdminDashboard/Customers/Customers';
import WorkerRequests from './Pages/Dashboards/AdminDashboard/WorkerRequests/WorkerRequests';
import UserDashboard from './Pages/Dashboards/UserDashboard/UserDashboard';
import WorkerDashboard from './Pages/Dashboards/WorkerDashboard/WorkerDashboard';
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

                    {/* Admin Route */}
                    <Route
                        path="/dashboard"
                        element={
                            <AdminRoute>
                                <AdminDashboard />
                            </AdminRoute>
                        }
                    >
                        <Route path="/dashboard" element={<AdminDashboardHome />} />
                        <Route path="/dashboard/customers" element={<Customers />} />
                        <Route path="/dashboard/worker-requests" element={<WorkerRequests />} />
                        <Route path="/dashboard/available-workers" element={<BusyWorkers />} />
                        <Route path="/dashboard/busy-workers" element={<AvailableWorkers />} />
                        <Route path="/dashboard/add-worker" element={<AdminAddWorker />} />
                        <Route path="/dashboard/add-service" element={<AdminAddService />} />
                    </Route>

                    {/* user Route */}
                    <Route
                        path="/dashboard"
                        element={
                            <UserRoute>
                                <UserDashboard />
                            </UserRoute>
                        }
                    />

                    {/* worker Route */}
                    <Route
                        path="/dashboard"
                        element={
                            <WorkerRoute>
                                <WorkerDashboard />
                            </WorkerRoute>
                        }
                    />

                    {/* authentication routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
