import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AuthProvider from '../../context/AuthProvider';
import Hire from '../Shared/Hire';
import AdminRoute from './Authentication/AdminRoute';
import Login from './Authentication/Login';
import NotFound from './Authentication/NotFound';
import PrivateRoute from './Authentication/PrivateRoute';
import Register from './Authentication/Register';
import UserRoute from './Authentication/UserRoute';
import WorkerRoute from './Authentication/WorkerRoute';
import AvailableWorkers from './AvailableWorkers';
import ContactUs from './ContactUs';
import AdminDashboard from './Dashboards/AdminDashboard';
import AdminAddOwner from './Dashboards/AdminDashboard/AdminAddOwner';
import AdminAddService from './Dashboards/AdminDashboard/AdminAddService';
import AdminAddWorker from './Dashboards/AdminDashboard/AdminAddWorker';
import AdminAvailableWorkers from './Dashboards/AdminDashboard/AdminAvailableWorkers';
import AdminDashboardHome from './Dashboards/AdminDashboard/AdminDashboardHome';
import AdminServices from './Dashboards/AdminDashboard/AdminServices';
import AdminWorkers from './Dashboards/AdminDashboard/AdminWorkers';
import BusyWorkers from './Dashboards/AdminDashboard/BusyWorkers';
import CustomerMessages from './Dashboards/AdminDashboard/CustomerMessages';
import Customers from './Dashboards/AdminDashboard/Customers';
import MakeAdmin from './Dashboards/AdminDashboard/MakeAdmin';
import ToLetRequests from './Dashboards/AdminDashboard/ToLetRequests';
import ToLets from './Dashboards/AdminDashboard/ToLets';
import WorkerRequests from './Dashboards/AdminDashboard/WorkerRequests';
import UserDashboard from './Dashboards/UserDashboard';
import BecameWorker from './Dashboards/UserDashboard/BecameWorker';
import Bookings from './Dashboards/UserDashboard/Bookings';
import PostToLet from './Dashboards/UserDashboard/PostToLet';
import RequestPending from './Dashboards/UserDashboard/RequestPending';
import UserDashboardHome from './Dashboards/UserDashboard/UserDashboardHome';
import WorkerDashboard from './Dashboards/WorkerDashboard';
import AllWorks from './Dashboards/WorkerDashboard/AllWorks';
import CurrentWorks from './Dashboards/WorkerDashboard/CurrentWorks';
import WorkerDashboardHome from './Dashboards/WorkerDashboard/WorkerDashboardHome';
import WorkRequest from './Dashboards/WorkerDashboard/WorkRequest';
import Home from './Home/Home';
import AllServices from './ServicesPage/AllServices';
import WorkerServices from './WorkerServices';
// ..
AOS.init();

const App = () => (
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* workers */}
                <Route path="/workers" element={<AvailableWorkers />} />
                {/* workers */}
                <Route path="/contactUs" element={<ContactUs />} />

                {/* service route */}
                <Route path="/services/:service" element={<WorkerServices />} />

                {/* services */}
                <Route path="/allServices" element={<AllServices />} />
                {/* workers route */}
                <Route path="/workers/:role" element={<AvailableWorkers />} />

                {/* hire */}
                <Route
                    path="/hire/:id"
                    element={
                        <PrivateRoute>
                            <Hire />
                        </PrivateRoute>
                    }
                />

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
                        path="/adminDashboard/workers/toLets"
                        element={
                            <AdminRoute>
                                <ToLets />
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
                        path="/adminDashboard/make-admin"
                        element={
                            <AdminRoute>
                                <MakeAdmin />
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
                        path="/adminDashboard/messages"
                        element={
                            <AdminRoute>
                                <CustomerMessages />
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
                        path="/adminDashboard/toLet-requests"
                        element={
                            <AdminRoute>
                                <ToLetRequests />
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
                        path="/adminDashboard/post-toLet"
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
                <Route path="/userDashboard" element={<UserDashboard />}>
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
                        path="/userDashboard/requestPending"
                        element={
                            <UserRoute>
                                <RequestPending />
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

                {/* not found */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </AuthProvider>
);

export default App;
