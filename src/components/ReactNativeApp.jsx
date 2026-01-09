import React from 'react';
import { FaAndroid, FaApple, FaDownload } from 'react-icons/fa';
import './ReactNativeApp.css';
import screen1 from '../assets/op1.jpeg';
import screen2 from '../assets/op6.jpeg';
import screen3 from '../assets/op2.jpeg';
import screen4 from '../assets/op3.jpeg';
import screen5 from '../assets/n1.jpeg';
import screen6 from '../assets/n2.jpeg';
import screen7 from '../assets/n3.jpeg';
import apkFile from '../assets/OpenFashion.apk';

const ReactNativeApp = () => {
    return (
        <section id="react-native-app" className="react-native-app-section">
            <div className="container">
                <div className="app-header">
                    <h2 className="section-title">My <span>React Native App</span></h2>
                    <p className="section-subtitle">
                        <h3 style={{ color: "#dab220ff" }}>OpenFashion</h3>
                    </p>
                    <p className="section-subtitle">
                        OpenFashion is ecommerce react native cross-platform app. <br />
                        Download the latest version securely to experience the power of cross-platform development.
                    </p>
                </div>

                <div className="app-content">
                    {/* Left Side: Screenshots */}
                    <div className="app-screenshots-grid">
                        <div className="app-screenshot-card side-screen-top">
                            <img src={screen1} alt="App Login" />
                        </div>
                        <div className="app-screenshot-card main-screen">
                            <img src={screen2} alt="App Dashboard" />
                        </div>
                        <div className="app-screenshot-card side-screen-bottom">
                            <img src={screen3} alt="App Profile" />
                        </div>
                        <div className="app-screenshot-card side-screen-bottom">
                            <img src={screen4} alt="App Profile" />
                        </div>
                    </div>

                    {/* Right Side: Download & Info */}
                    <div className="app-info-panel">
                        <div className="app-feature-list">
                            <h3>Key Features</h3>
                            <ul>
                                <li><span>🚀</span> High Performance eCommerce App</li>
                                <li><span>🌙</span> Elegant Light Mode UI</li>
                                <li><span>🔒</span> Simple And Easy To Use</li>
                            </ul>
                        </div>

                        <div className="download-area">
                            <div className="platform-badges">
                                <span className="badge android"><FaAndroid /> Android</span>
                                <span className="badge ios"><FaApple /> iOS (Coming Soon)</span>
                            </div>

                            <a href={apkFile} download="OpenFashion.apk" className="btn-download-apk">
                                <FaDownload className="icon-pulse" /> Download APK for Android
                            </a>

                        </div>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="app-header">
                    <p className="section-subtitle">
                        <h3 style={{ color: "#dab220ff" }}>Torin</h3>
                    </p>
                    <p className="section-subtitle">
                        Torin is OTT cross-platform app.It is inspired by netflix  <br />
                        Download the latest version securely.
                    </p>
                </div>

                <div className="app-content">
                    {/* Left Side: Screenshots */}
                    <div className="app-screenshots-grid">
                        <div className="app-screenshot-card side-screen-top">
                            <img src={screen5} alt="App Login" />
                        </div>
                        <div className="app-screenshot-card main-screen">
                            <img src={screen6} alt="App Dashboard" />
                        </div>
                        <div className="app-screenshot-card side-screen-bottom">
                            <img src={screen7} alt="App Profile" />
                        </div>

                    </div>

                    {/* Right Side: Download & Info */}
                    <div className="app-info-panel">
                        <div className="app-feature-list">
                            <h3>Key Features</h3>
                            <ul>
                                <li><span>🚀</span> Ott App broadcast movies,tvshows and region specific shows</li>
                                <li><span>🌙</span> Elegant Dark Mode UI inspired by netflix</li>
                                <li><span>🔒</span> broadcast show from differeny servers</li>
                            </ul>
                        </div>

                        <div className="download-area">
                            <div className="platform-badges">
                                <span className="badge android"><FaAndroid /> Android</span>
                                <span className="badge ios"><FaApple /> iOS (Coming Soon)</span>
                            </div>

                            <a href={apkFile} download="NetflixApp (1).apk" className="btn-download-apk">
                                <FaDownload className="icon-pulse" /> Download APK for Android
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
};

export default ReactNativeApp;
