import React from 'react'
import Typist from "react-text-typist"
import img from '../../src/bg-b.jpeg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './home.css'

const Home = () => {
    return (
        <>
            {/* navbar */}
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container">
                    <a class="navbar-brand nav-link" href="#" >BHAVINPORTFOLIO</a>
                    <button class="navbar-toggler navbar-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse justify-content-end collapse" id="navbarSupportedContent" >
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#resume">Resume</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* background */}
            <section className='bgimg-section' id='#'>
                <Container fluid>
                    <Row >
                        <Col style={{ padding: "0px" }}>
                            <div className="bg-img-text">
                                {/* <img src={img} alt="bhavin" className='w-100 bg-img position-relative background-size-cover' /> */}
                                {/* <img src='https://images.unsplash.com/photo-1536694174218-92a1d79a0ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTUlMjBpbmNoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt="bhavin" className='w-100 bg-img position-relative background-size-cover' /> */}
                                {/* <div className="container gx-4 gx-lg-5 text-center position-absolute top-50 start-50 translate-middle bg-text pr-lg-0 mb-lg-0"> */}
                                <div className=" bg-text lg-12 sm-3 md-5 text-center">
                                    <h1>Welcome</h1>
                                    <h1 >I Am Bhavin Ghoghari</h1>
                                    <p>I Am <Typist sentences={['Frunted Devloper.', 'React js Devloper.', 'Full Stack Devloper.']} loop={true} startDelay={80} deletingSpeed={80} cursorSmooth='true' typingSpeed={80} /></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container >
            </section >
            {/* about me */}
            < section className='about-section' id='about' >
                <div className="container mt-5">
                    <div className="row mb-5 align-item-center d-flex justify-content-center">
                        <div className="col-lg-5 pr-lg-5 mb-5 mb-lg-0">
                            <div className="about-img">
                                {/* <img src="https://preview.colorlib.com/theme/orbit/images/image_1_long.jpg.webp" alt="image place holder" className='img-fluid' /> */}
                                <img src="https://i.pinimg.com/564x/61/32/18/61321875470966ea3a42e9a7c12f7c4e.jpg" alt="bhavin" className='img-fluid' height='600ch' width="90%" />
                            </div>
                            <div className="about-text">
                                <p>
                                    <span className='about-text-head'>Name: </span>
                                    <span >Bhavin Ghoghari</span>
                                </p>
                                <p>
                                    <span className='about-text-head'>E-mail: </span>
                                    <span>bhavinrghoghari@gmail.com</span>
                                </p>
                                <p>
                                    <span className='about-text-head'>Phone: </span>
                                    <span>+918320291070</span>
                                </p>
                                <p>
                                    <span className='about-text-head'>Location: </span>
                                    <span>Surat,Gujarat</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 pl-lg-5 mb-5 mb-lg-0">
                            <div className="about-heading">
                                <h2>About Me</h2>
                            </div>
                            <p>To explore new things and challenges, where I can contribute my knowledge and skill to the organization and add values to myself through continuous learning.</p>
                            <p>Used Html, Css, Java Script languages to create effective pages, dashboards and applications.</p>
                            <p>Increased knowledge of latest technologies, software and hardware products to implement in a variety of projects.</p>
                            <div className="my-1">
                                <div className="about-skill">
                                    <h2>Skills</h2>
                                </div>
                                <span>HTML 5</span>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{ width: '70%' }}></div>
                                </div>
                                <span>CSS 3</span>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{ width: '75%' }}></div>
                                </div>
                                <span>JavaScript</span>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{ width: '90%' }}></div>
                                </div>
                                <span>react-Bootstrap/ 5</span>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{ width: '50%' }}></div>
                                </div>
                                <span>Python</span>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{ width: '70%' }}></div>
                                </div>
                                <span>SQL</span>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{ width: '40%' }}></div>
                                </div>
                                <span>C</span>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{ width: '35%' }}></div>
                                </div>
                                <span>React Js</span>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* Services */}
            < section className='services-section' id='services' >
                <div className="container mt-5">
                    <div className="px-4 px-lg-5">
                        <h2 className='text-center mt-0'>
                            Services
                        </h2>
                        <p className='text-center'>Let's start a new project together.</p>
                        <p>
                            <hr className='service-hr' />
                        </p>
                        <div className="row gx-4 gx-lg-5">
                            {/* <div className="row"> */}
                            <div className="col-sm-6 col-md-3 mb-4">
                                <div className="custom-card card border text-center">
                                    <div className="card-body">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-laptop text-primary" viewBox="0 0 16 16">
                                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                        </svg>
                                        <h5 className='m-4'>Web Design</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 mb-4">
                                <div className="custom-card card border text-center">
                                    <div className="card-body">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-filetype-jsx text-primary" viewBox="0 0 16 16" >
                                            <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.075 14.841a1.13 1.13 0 0 0 .401.823c.13.108.288.192.478.252.19.061.411.091.665.091.338 0 .624-.053.858-.158.237-.105.416-.252.54-.44a1.17 1.17 0 0 0 .187-.656c0-.224-.045-.41-.135-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.565-.21l-.621-.144a.97.97 0 0 1-.405-.176.37.37 0 0 1-.143-.299c0-.156.061-.284.184-.384.125-.101.296-.152.513-.152.143 0 .266.023.37.068a.624.624 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.199-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.552.05-.776.15-.225.099-.4.24-.528.421-.127.182-.19.395-.19.639 0 .201.04.376.123.524.082.149.199.27.351.367.153.095.332.167.54.213l.618.144c.207.049.36.113.462.193a.387.387 0 0 1 .153.326.512.512 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.224-.013-.32-.04a.837.837 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM0 14.791c0 .165.027.32.082.466.055.147.136.277.243.39.11.113.245.202.407.267.164.062.354.093.569.093.42 0 .748-.115.984-.346.238-.23.358-.565.358-1.004v-2.725h-.791v2.745c0 .201-.046.357-.138.466-.092.11-.233.164-.422.164a.499.499 0 0 1-.454-.246.576.576 0 0 1-.073-.27H0Zm8.907-2.859H9.8l-1.274 2.007L9.78 15.93h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z" />
                                        </svg>
                                        <h5 className='m-4'>React Js</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 mb-4">
                                <div className="custom-card card border text-center">
                                    <div className="card-body">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-bootstrap text-primary" viewBox="0 0 16 16">
                                            <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z" />
                                            <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z" />
                                        </svg>
                                        <h5 className='m-4'>Bootstrap 5</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 mb-4">
                                <div className="custom-card card border text-center">
                                    <div className="card-body">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-laptop text-primary" viewBox="0 0 16 16">
                                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                        </svg>
                                        <h5 className='m-4'>Web</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-6 text-center">
                            <div className="mt-5"><svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" class="bi bi-filetype-jsx text-primary" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.075 14.841a1.13 1.13 0 0 0 .401.823c.13.108.288.192.478.252.19.061.411.091.665.091.338 0 .624-.053.858-.158.237-.105.416-.252.54-.44a1.17 1.17 0 0 0 .187-.656c0-.224-.045-.41-.135-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.565-.21l-.621-.144a.97.97 0 0 1-.405-.176.37.37 0 0 1-.143-.299c0-.156.061-.284.184-.384.125-.101.296-.152.513-.152.143 0 .266.023.37.068a.624.624 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.199-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.552.05-.776.15-.225.099-.4.24-.528.421-.127.182-.19.395-.19.639 0 .201.04.376.123.524.082.149.199.27.351.367.153.095.332.167.54.213l.618.144c.207.049.36.113.462.193a.387.387 0 0 1 .153.326.512.512 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.224-.013-.32-.04a.837.837 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM0 14.791c0 .165.027.32.082.466.055.147.136.277.243.39.11.113.245.202.407.267.164.062.354.093.569.093.42 0 .748-.115.984-.346.238-.23.358-.565.358-1.004v-2.725h-.791v2.745c0 .201-.046.357-.138.466-.092.11-.233.164-.422.164a.499.499 0 0 1-.454-.246.576.576 0 0 1-.073-.27H0Zm8.907-2.859H9.8l-1.274 2.007L9.78 15.93h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z" />
                            </svg></div>
                            <h3 className="h4 m-3">React Js</h3>
                            <p className="text-muted m-2">React Js responsible for designing and developing websites and website applications. Using a variety of programming languages and web technologies, web developers manage site functionality, implement application features, and integrate security measures.</p>
                        </div> */}
                        {/* <div className="col-lg-4 col-md-6 text-center">
                            <div className="mt-5"></div>
                            <h3 className="h4 m-3">Bootstrap</h3>
                            <p className="text-muted m-2">Bootstrap responsible for designing and developing websites and website applications. Using a variety of programming languages and web technologies, web developers manage site functionality, implement application features, and integrate security measures.</p>
                        </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </section >
            {/* portfollio */}
            < section className="portfollio-section" id='resume' >
                <div className="container mt-5">
                    <div className="resume-title text-center">
                        <h1>Resume</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, distinctio officiis nisi, sequi exercitationem quibusdam labore dolor laboriosam accusantium vel eligendi asperiores expedita hic recusandae neque dolore fugiat possimus blanditiis?</p>
                    </div>
                    <hr className='resume-hr' />
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="mt-5 ">Education</h3>
                            <div className="resume-item border-start">
                                <h4 className="mt-4">
                                    Becholor of Computer Application
                                </h4>
                                <h6 className='pt-3 pb-3'>
                                    2022-running
                                </h6>
                                <em className='pt-3 pb-3'>Sutex Bank College of Computer Application & Science,Surat</em>
                            </div>
                            <div className="resume-item border-start border-top">
                                <h4 className="mt-3">
                                    H.S.C
                                </h4>
                                <h6 className='pt-3 pb-3'>
                                    2019-2020
                                </h6>
                                <em className='pt-3 pb-3'>Brilliant Vidhyalaya,Surat</em>
                                <p className='pt-3 pb-3'><em>Percentages : 72.81%</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* contact */}
            < section className='contact-section' id="contact" >
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6 mt-5 text-center">
                            <h2 className='mt-5'>Let's Gets In Tourch</h2>
                            <hr className="f_hr" />
                            <p className='text-muted mb-5'>Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                        <div className="col-lg-6">
                            <form id='form-control'>
                                <div className="form-floating mb-3">
                                    <input id='name' type="text" className="form-control" placeholder='Enter Your Name....' required />
                                    <label for="name">Full Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input id='main' type="email" className="form-control" placeholder='name@example.com' required />
                                    <label for="mail">E-mail Address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input id='phone' type="tel" className="form-control" placeholder='+91 1234567890' required />
                                    <label for="phone">Phone Number</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea id='message' type="text" className="form-control" placeholder='Enter Your Message Here....' style={{ height: '10rem' }} required />
                                    <label for="message">Message</label>
                                </div>
                                <div className="d-grid"><button className='btn btn-primary btn-xl' type='submit'>Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
            {/* footer */}
            < footer className='site-footer' >
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12 text-center" style={{ fontSize: '18px' }}>
                            <p>
                                Copyright © 2023 All rights reserved | This template is made with ❤️ by BHAVIN GHOGHARI
                            </p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-12 text-center">
                            <p>
                                <a href="https://www.instagram.com/" className='social-icon' target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-instagram social-link" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                                    </svg>
                                </a>
                                <a href="https://github.com/" className='social-icon' target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-github social-link" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/bhavin-ghoghari-1a3b29249/" className='social-icon' target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-linkedin social-link" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                                    </svg>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer >
            {/* button */}
            {/* < button id='btn' className='btn btn-primary' >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"></path>
                </svg>
            </button > */}
        </>
    )
}

export default Home
