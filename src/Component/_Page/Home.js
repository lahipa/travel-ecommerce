import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import RenderRegistrasi from '../Member/Registrasi';
import RenderLogin from '../Member/Login';
import RenderProfile from '../Member/Profile';

const Home = (props) => {
    const [data,setData] = useState({})

    console.log(data, 'ini data')

    return (
        <section>
            <div className="container">
                <div className="tabWrapperHome">
                    <Tabs defaultActiveKey="signup" id="uncontrolled-tab-example">
                        <Tab eventKey="signup" title="Sign Up" className="tabsCont">
                            <RenderRegistrasi 
                                dataRegistrasi = {(data) => setData(data)} 
                            />
                        </Tab>
                        <Tab eventKey="login" title="Login" className="tabsCont">
                            <RenderLogin
                                data={data} />
                        </Tab>
                        <Tab eventKey="profile" title="Profile" className="tabsCont">
                            <RenderProfile
                                data={data} 
                            />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default Home