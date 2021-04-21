import React from 'react';
import './Home.css';
import AccountCircle from "@material-ui/icons/AccountCircle";
import Alarm from '@material-ui/icons/Notifications';
import Button from './Button/Button';
import Recent from './Recent Activity/Recent';

const Home = () => {
    return (
        <div className="home">
            <nav className="nav">
                <div className="nav_icons">
                    <button>LOGO</button>
                </div>
                <div className="personal_info">
                    <AccountCircle className="nav_icon" />
                    <Alarm className="nav_icon" />
                </div>
            </nav>
            <div className="accounts">
                <p>WALLET BALANCE</p>
                <p>TOKEN BALANCE:</p>
                <p>NAIRA BALANCE:</p>
            </div>
            <div className="account_info">
            <div className="select_currency">
                <p>Select Currency:</p>
            </div>
            <div>
                <div className="amount">
                    <button className="account_name">TOKEN</button>
                    <p className="number">0.000000001</p>
                </div>
            </div>
                <div className="buttons">
                    <Button type="SEND" />
                    <Button type="RECEIVE" />
                </div>
            </div>
            <div className="recents">
                    <h4>Recent Acitivity</h4>
                <div className="recents_list">
                <Recent 
                    date='Date'
                    recentText='Description'
                    number='Amount'/>
                <Recent
                    date='1/1/21'
                    recentText='Sent'
                    number='N100.00'/>
                <Recent
                    date='2/2/21'
                    recentText='Recieved'
                    number='N200.00'/>
                <Recent
                    date='3/3/21'
                    recentText='Sent'
                    number='N300.00'/>    
                </div>
            </div>
        </div>
    )
}

export default Home;
