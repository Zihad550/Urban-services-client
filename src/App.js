import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AuthProvider from './context/AuthProvider';
import AdminRoute from './Pages/Authentication/AdminRoute/AdminRoute';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import UserRoute from './Pages/Authentication/UserRoute/UserRoute';
import WorkerRoute from './Pages/Authentication/WorkerRoute/WorkerRoute';
import AvailableWorkers from './Pages/AvailableWorkers/AvailableWorkers/AvailableWorkers';
import AdminAddOwner from './Pages/Dashboards/AdminDashboard/AdminAddOwner/AdminAddOwner';
import AdminAddService from './Pages/Dashboards/AdminDashboard/AdminAddService/AdminAddService';
import AdminAddWorker from './Pages/Dashboards/AdminDashboard/AdminAddWorker/AdminAddWorker';
import AdminAvailableWorkers from './Pages/Dashboards/AdminDashboard/AdminAvailableWorkers/AdminAvailableWorkers';
import AdminDashboard from './Pages/Dashboards/AdminDashboard/AdminDashboard/AdminDashboard';
import AdminDashboardHome from './Pages/Dashboards/AdminDashboard/AdminDashboardHome/AdminDashboardHome/AdminDashboardHome';
import AdminServices from './Pages/Dashboards/AdminDashboard/AdminServices/AdminServices';
import AdminWorkers from './Pages/Dashboards/AdminDashboard/AdminWorkers/AdminWorkers';
import BusyWorkers from './Pages/Dashboards/AdminDashboard/BusyWorkers/BusyWorkers';
import Customers from './Pages/Dashboards/AdminDashboard/Customers/Customers';
import WorkerRequests from './Pages/Dashboards/AdminDashboard/WorkerRequests/WorkerRequests';
import Dashboards from './Pages/Dashboards/Dashboards/Dashboards';
import BecameWorker from './Pages/Dashboards/UserDashboard/BecameWorker/BecameWorker';
import Bookings from './Pages/Dashboards/UserDashboard/Bookings/Bookings';
import PostToLet from './Pages/Dashboards/UserDashboard/PostToLet/PostToLet';
import UserDashboardHome from './Pages/Dashboards/UserDashboard/UserDashboardHome/UserDashboardHome';
import AllWorks from './Pages/Dashboards/WorkerDashboard/AllWorks/AllWorks';
import CurrentWorks from './Pages/Dashboards/WorkerDashboard/CurrentWorks/CurrentWorks';
import WorkerDashboard from './Pages/Dashboards/WorkerDashboard/WorkerDashboard/WorkerDashboard';
import WorkerDashboardHome from './Pages/Dashboards/WorkerDashboard/WorkerDashboardHome/WorkerDashboardHome';
import WorkRequest from './Pages/Dashboards/WorkerDashboard/WorkRequest/WorkRequest';
import WorkerServices from './Pages/Details/WorkerServices/WorkerServices';
import Home from './Pages/Home/Home/Home';
import AllServices from './Pages/ServicesPage/AllServices';
import Hire from './Pages/Shared/Hire/Hire';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />

                    {/* workers */}
                    <Route path="/workers" element={<AvailableWorkers />} />

                    {/* service route */}
                    <Route path="/services/:service" element={<WorkerServices />} />

                    {/* services */}
                    <Route path="/allServices" element={<AllServices />} />
                    {/* workers route */}
                    <Route path="/workers/:role" element={<AvailableWorkers />} />

                    {/* hire */}
                    <Route path="/hire/:id" element={<Hire />} />

                    {/* Admin Dashboard */}
                    <Route
                        path="/adminDashboard"
                        element={
                            <AdminRoute>
                                <AdminDashboard />
                            </AdminRoute>
                        }
                    >
                        {/* admin routes */}
                        <Route
                            path="/adminDashboard"
                            element={
                                <AdminRoute>
                                    <AdminDashboardHome />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/adminDashboard/workers/:role"
                            element={
                                <AdminRoute>
                                    <AdminWorkers />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/adminDashboard/services/:type"
                            element={
                                <AdminRoute>
                                    <AdminServices />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/adminDashboard/customers"
                            element={
                                <AdminRoute>
                                    <Customers />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/adminDashboard/worker-requests"
                            element={
                                <AdminRoute>
                                    <WorkerRequests />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/adminDashboard/available-workers"
                            element={
                                <AdminRoute>
                                    <AdminAvailableWorkers />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/adminDashboard/busy-workers"
                            element={
                                <AdminRoute>
                                    <BusyWorkers />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/adminDashboard/add-house-owner"
                            element={
                                <AdminRoute>
                                    <AdminAddOwner />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/adminDashboard/add-worker"
                            element={
                                <AdminRoute>
                                    <AdminAddWorker />
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/adminDashboard/add-service"
                            element={
                                <AdminRoute>
                                    <AdminAddService />
                                </AdminRoute>
                            }
                        />
                    </Route>

                    {/* user Dashboard */}
                    <Route path="/userDashboard" element={<Dashboards />}>
                        {/* user routes */}
                        <Route
                            path="/userDashboard"
                            element={
                                <UserRoute>
                                    <UserDashboardHome />
                                </UserRoute>
                            }
                        />
                        <Route
                            path="/userDashboard/hired"
                            element={
                                <UserRoute>
                                    <Bookings />
                                </UserRoute>
                            }
                        />
                        <Route
                            path="/userDashboard/became-worker"
                            element={
                                <UserRoute>
                                    <BecameWorker />
                                </UserRoute>
                            }
                        />
                        <Route
                            path="/userDashboard/post-toLet"
                            element={
                                <UserRoute>
                                    <PostToLet />
                                </UserRoute>
                            }
                        />
                    </Route>

                    {/*  workers Dashboard */}
                    <Route path="/workerDashboard" element={<WorkerDashboard />}>
                        {/* workers routes */}
                        <Route
                            path="/workerDashboard"
                            element={
                                <WorkerRoute>
                                    <WorkerDashboardHome />
                                </WorkerRoute>
                            }
                        />
                        <Route
                            path="/workerDashboard/current-works"
                            element={
                                <WorkerRoute>
                                    <CurrentWorks />
                                </WorkerRoute>
                            }
                        />
                        <Route
                            path="/workerDashboard/all-works"
                            element={
                                <WorkerRoute>
                                    <AllWorks />
                                </WorkerRoute>
                            }
                        />
                        <Route
                            path="/workerDashboard/work-request"
                            element={
                                <WorkerRoute>
                                    <WorkRequest />
                                </WorkerRoute>
                            }
                        />
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
