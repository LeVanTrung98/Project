import React from 'react';
import Avatar from '@material-ui/core/Avatar';
// import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './../PrivateRoute';
import LayoutLogin from './LayoutLogin';
import LayoutCreateUsers from './LayoutCreateUsers';
import LayoutListUsers from './LayoutListUsers';
import LayoutCreateCar from './LayoutCreateCar';
import LayoutListCar from './LayoutListCar';
import LayoutListTrips from './LayoutListTrips';
import LayoutCreatePost from './LayoutCreatePost';
import LayoutListPost from './LayoutListPost';
import LayoutDashboard from './LayoutDashboard';
import LayoutProfile from './LayoutProfile';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter,
    withRouter,
    useHistory,
    useLocation,
    Redirect,

} from "react-router-dom";

export default function LayoutHomeAdmin() {
    // const get_data = useSelector(state => console.log(state));
    const user_name_login = JSON.parse(sessionStorage.getItem('tokens')).Admin_Name;
    const user_role_login = JSON.parse(sessionStorage.getItem('tokens')).Roles_Id;
    return (
        <HashRouter>
            <div className="admin">
                <div className="row">
<<<<<<< HEAD
                    <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xl-2 admin-left">
                        <div className="my-4">
                            <div className="navbar navbar-expand-lg">
                                <button className="navbar-toggler" type="button">
                                    <span><i className="fas fa-bars"></i></span>
                                </button>
                                <div className="navbar-collapse collapse" id="content">
                                    <ul className="block-menu ">
                                        <li className="">
                                            <a href="#" className="row menu-toggle">
                                                <span className="iconAvatar col-1"><Avatar src="https://cdn4.iconfinder.com/data/icons/people-std-pack/512/boss-512.png" /></span>
                                                <span className="col-7"><p>{user_name_login}</p></span>
                                                <span className="col-2">
                                                    <i className="fas icon-toggle fa-chevron-down hide-icon" />
                                                    <i className="fas icon-toggle  fa-chevron-right" />
                                                </span>
                                            </a>
                                            <ul className="menu-child menu-child-toggle">
                                                {/* <li className="mb-3">
                                                    <Link to="/admgin/logout" className="ml-5">Logout</Link>
                                                </li> */}
                                                <li className="nav-link link">
                                                    <Link to="/admin/profile" className="ml-2"><p>Thông Tin Tài Khoản</p></Link>
=======
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-2 admin-left">
                        <div>
                            <ul className="block-menu">
                                <li >
                                    <a href="#" className="row menu-toggle">
                                        <span className="iconAvatar col-1"><Avatar src="https://cdn4.iconfinder.com/data/icons/people-std-pack/512/boss-512.png" /></span>
                                        <span className="col-7"><p>{user_name_login}</p></span>
                                        <span className="col-2">
                                            <i className="fas icon-toggle fa-chevron-down hide-icon" />
                                            <i className="fas icon-toggle  fa-chevron-right" />
                                        </span>
                                    </a>
                                    <ul className="menu-child menu-child-toggle">
                                        {/* <li className="mb-3">
                                            <Link to="/admin/logout" className="ml-5">Logout</Link>
                                        </li> */}
                                        <li className="mb-3">
                                            <Link to="/admin/profile" className="ml-5">My Profile</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li >
                                    <a href="#" className="row menu-toggle">
                                        <span className="col-1"><i className="fas fa-home"></i></span>
                                        <span className="col-7"><p> Dashboard</p></span>
                                        <span className="col-2"></span>
                                    </a>
                                </li>
                                <li >
                                    <a href="#" className="row menu-toggle">
                                        <span className="col-1"><i className="fas fa-user"></i></span>
                                        <span className="col-7"><p> Customers</p></span>
                                        <span className="col-2">
                                            <i className="fas icon-toggle fa-chevron-down hide-icon" />
                                            <i className="fas icon-toggle  fa-chevron-right" />
                                        </span>
                                    </a>
                                    <ul className="menu-child menu-child-toggle">
                                        {
                                            (user_role_login == 2 || user_role_login == 1) ? (
                                                <li className="mb-3">
                                                    <Link to="/admin/create-user" className="ml-5">Create Users</Link>
>>>>>>> parent of 08b6b2d... trung code done sprint 2
                                                </li>
                                            </ul>
                                        </li>
                                        <li  className="">
                                            <Link  className="row menu-toggle">
                                                <span className="col-1"><i className="fas fa-home"></i></span>
                                                <span className="col-7"><p> Dashboard</p></span>
                                                <span className="col-2"></span>
                                            </Link>
                                        </li>
                                        <li  className="">
                                            <a href="#" className="row menu-toggle">
                                                <span className="col-1"><i className="fas fa-user"></i></span>
                                                {
                                                    user_role_login == 1 ? (<span className="col-7  "><p> Khách Hàng</p></span>) : (<span className="col-7"><p> Nhân Viên</p></span>)
                                                }
                                                <span className="col-2 ">
                                                    <i className="fas icon-toggle fa-chevron-down hide-icon" />
                                                    <i className="fas icon-toggle  fa-chevron-right" />
                                                </span>
                                            </a>
                                            <ul className="menu-child menu-child-toggle">
                                                {
                                                    (user_role_login == 1) ? (
                                                        <li className="nav-link link">
                                                            <Link to="/admin/create-user" className="ml-4 link"><p>Tạo Khách Hàng</p></Link>
                                                        </li>
                                                    ) :
                                                    user_role_login == 2 ? (
                                                        <li className="nav-link link">
                                                        <Link to="/admin/create-user" className="ml-4"><p>Tạo Nhân Viên</p></Link>
                                                    </li>
                                                    ) : null
                                                }
                                                {
                                                    (user_role_login == 1) ? (
                                                        <li className="nav-link link">
                                                            <Link to="/admin/list-users" className="ml-4 "><p>DS Khách Hàng</p></Link>
                                                        </li>
                                                    ) :
                                                    user_role_login == 2 ? (
                                                        <li className="nav-link link">
                                                            <Link to="/admin/list-users" className="ml-4 "><p>DS Nhân Viên</p></Link>
                                                        </li>
                                                    ) : null
                                                }
                                                
                                            </ul>
                                        </li>
                                        {
                                            user_role_login == 1 ? null : (
                                                <li  className="">
                                                    <a href="#" className="row menu-toggle">
                                                        <span className="col-1"><i className="fas fa-car"></i></span>
                                                        <span className="col-7"><p>Xe Khách</p></span>
                                                        <span className="col-2">
                                                            <i className="fas icon-toggle fa-chevron-down hide-icon" />
                                                            <i className="fas icon-toggle  fa-chevron-right" />
                                                        </span>
                                                    </a>
                                                    <ul className="menu-child menu-child-toggle">
                                                        {
                                                            user_role_login == 2 ? (
                                                                <li className="nav-link link">
                                                                    <Link to="/admin/create-car" className="ml-4"><p>Tạo Xe</p></Link>
                                                                </li>
                                                            ) : null
                                                        }
                                                        {
                                                            user_role_login != 1 ? (
                                                                <li className="nav-link link">
                                                                    <Link to="/admin/list-cars" className="ml-4 "><p>Danh Sách Xe</p></Link>
                                                                </li>
                                                            ) : null
                                                        }

                                                    </ul>
                                                </li>
                                            )
                                        }
                                        {
                                            user_role_login == 1 ? null : (
                                                <li  className="">
                                                    <a href="#" className="row menu-toggle">
                                                        <span className="col-1"><i className="fas fa-map-marker-alt"></i></span>
                                                        <span className="col-7"><p> Tuyến Đi</p></span>
                                                        <span className="col-2">
                                                            <i className="fas icon-toggle fa-chevron-down hide-icon" />
                                                            <i className="fas icon-toggle  fa-chevron-right" />
                                                        </span>
                                                    </a>
                                                    <ul className="menu-child menu-child-toggle">
                                                        <li className="nav-link link">
                                                            <Link to="/admin/list-trips" className="ml-4 "><p>Danh Sách Tuyến</p></Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            )
                                        }
                                        <li  className="">
                                            <a href="#" className="row menu-toggle">
                                                <span className="col-1"><i className="fas fa-mail-bulk"></i></span>
                                                <span className="col-7"><p>Bài Viết</p></span>
                                                <span className="col-2">
                                                    <i className="fas icon-toggle fa-chevron-down hide-icon" />
                                                    <i className="fas icon-toggle  fa-chevron-right" />
                                                </span>
                                            </a>
                                            <ul className="menu-child menu-child-toggle">
                                                {
                                                    user_role_login != 2 ? null : (
                                                        <li className="nav-link link">
                                                            <Link to="/admin/create-post" className="ml-4 "><p>Tạo Bài Viết</p> </Link>
                                                        </li>
                                                    )
                                                }
                                                <li className="nav-link link">
                                                    <Link to="/admin/list-posts" className="ml-4 link"><p>Danh Sách Bài Viết</p></Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9 col-xl-10">
                        <div className="admin-right">
                            <Switch>
                                <Route path="/admin/logout">
                                    <LayoutLogin />
                                </Route>
                                <PrivateRoute exact path="/admin">
                                    <LayoutDashboard />
                                </PrivateRoute>
                                <PrivateRoute path="/admin/create-user">
                                    <LayoutCreateUsers />
                                </PrivateRoute>
                                <PrivateRoute path="/admin/list-users">
                                    <LayoutListUsers />
                                </PrivateRoute>
                                <PrivateRoute path="/admin/create-car">
                                    <LayoutCreateCar />
                                </PrivateRoute>
                                <PrivateRoute path="/admin/list-cars">
                                    <LayoutListCar />
                                </PrivateRoute>
                                <PrivateRoute path="/admin/list-trips">
                                    <LayoutListTrips />
                                </PrivateRoute>
                                <PrivateRoute path="/admin/create-post">
                                    <LayoutCreatePost />
                                </PrivateRoute>
                                <PrivateRoute path="/admin/list-posts">
                                    <LayoutListPost />
                                </PrivateRoute>
                                <PrivateRoute path="/admin/profile">
                                    <LayoutProfile />
                                </PrivateRoute>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </HashRouter>
    )
}
