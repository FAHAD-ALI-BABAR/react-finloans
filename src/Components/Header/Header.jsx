import React from 'react'
import "./Header.css"
import logo from "../../Images/logo.webp"
import bg from "../../Images/pexel.webp"
const Header = () => {
  return (
    <>
    <div className='overlay'></div>
    <div className="header-area border border-black h-[95vh] bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${bg})` }}>
      <div id="sticky-header" className="main-header-area">
        <div className="container-fluid">
          <div className="header-bottom-border pt-5">
            <div className="row flex justify-around">
              <div className="col-xl-3 col-lg-2">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="main-menu hidden lg:block">
                  <nav>
                    <ul id="navigation" className="flex justify-center space-x-4 pt-3 text-white ">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="Loan.html">Loan</a></li>
                      <li><a href="about.html">About</a></li>
                      <li className="relative group">
                        <a href="#">Pages <i className="ti-angle-down"></i></a>
                        <ul className="submenu absolute left-0 hidden group-hover:block  shadow-md">
                          <li><a href="apply.html">Apply Loan</a></li>
                          <li><a href="elements.html">Elements</a></li>
                        </ul>
                      </li>
                      <li className="relative group">
                        <a href="#">Blog <i className="ti-angle-down"></i></a>
                        <ul className="submenu absolute left-0 hidden group-hover:block shadow-md">
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="single-blog.html">Single Blog</a></li>
                        </ul>
                      </li>
                      <li><a href="FAQ.html">FAQ</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 hidden lg:block">
                <div className="appointment flex items-center justify-end">
                  <div className="phone-num hidden xl:block pt-3 text-white">
                    <a id="navigation" href="#" className="flex items-center ">
                      <i className="fa fa-phone "></i> +10 673 567 367
                    </a>
                  </div>
                  <div className="ml-4 pt-2">
  <a
    href="apply.html"
    className="btnn   py-3 px-6 rounded-lg transition duration-300 ease-in-out"
  >
    Apply for a Loan
  </a>
</div>
                </div>
              </div>
              <div className="col-12 lg:hidden">
                <div className="mobile-menu">
                  <a href="#" className="slicknav_btn">
                    <span className="slicknav_menutxt">MENU</span>
                    <span className="slicknav_icon">
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                    </span>
                  </a>
                  <ul className="slicknav_nav hidden">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="Loan.html">Loan</a></li>
                    <li><a href="about.html">About</a></li>
                    <li className="relative">
                      <a href="#">Pages <i className="ti-angle-down"></i></a>
                      <ul className="submenu hidden">
                        <li><a href="apply.html">Apply Loan</a></li>
                        <li><a href="elements.html">Elements</a></li>
                      </ul>
                    </li>
                    <li className="relative">
                      <a href="#">Blog <i className="ti-angle-down"></i></a>
                      <ul className="submenu hidden">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="single-blog.html">Single Blog</a></li>
                      </ul>
                    </li>
                    <li><a href="FAQ.html">FAQ</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center justify-center">
        <div className="lg:w-7/12 md:w-6/12">
          <div className="slider_text">
            <h3 className="text-3xl font-semibold mb-4 animate__animated animate__fadeInRight animate__delay-1s">
              Get Loan for your Business growth or startup
            </h3>
            <div className="sldier_btn animate__animated animate__fadeInLeft animate__delay-2s">
              <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded">
                How it Works
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-5/12 md:w-6/12">
          <div className="payment_form bg-white p-8 shadow-lg rounded animate__animated animate__fadeInDown animate__delay-2s">
            <div className="info text-center mb-6">
              <h4 className="text-xl font-semibold">How much do you want?</h4>
              <p className="text-gray-600">We provide online instant cash loans with quick</p>
            </div>
            <div className="form">
              <div className="mb-4">
                <div className="single_input">
                  <select className="w-full px-4 py-2 border rounded">
                    <option value="">Amount</option>
                    <option value="10">$10</option>
                    <option value="40">$40</option>
                    <option value="50">$50</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <div className="single_input">
                  <select className="w-full px-4 py-2 border rounded">
                    <option value="">Month</option>
                    <option value="3">3 Month</option>
                    <option value="6">6 Month</option>
                    <option value="9">9 Month</option>
                    <option value="12">12 Month</option>
                  </select>
                </div>
              </div>
            </div>
            <p className="mb-4">You have to pay: <span className="font-semibold">$0</span></p>
            <div className="submit_btn">
              <button className="bg-blue-500 text-white px-6 py-3 rounded w-full">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    

    </>
  )
}

export default Header