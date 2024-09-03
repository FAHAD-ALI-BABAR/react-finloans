import React from 'react'
import blogs1 from "../../Images/blogs1.webp"
import rec1 from "../../Images/recent1.webp"
import rec2 from "../../Images/recent2.webp"
import rec3 from "../../Images/recent3.webp"
import rec4 from "../../Images/recent4.webp"
import post1 from "../../Images/post1.webp"
import post2 from "../../Images/post2.webp"
import post3 from "../../Images/post3.webp"
import post4 from "../../Images/post4.webp"
import post5 from "../../Images/post5.webp"
import post6 from "../../Images/post6.webp"
import author1 from "../../Images/author1.webp"
import com from "../../Images/comment.webp"
import com1 from "../../Images/comment2.webp"
import com2 from "../../Images/comment33.webp"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
const Singleblog = () => {
  const images=[blogs1]
    const recent=[rec1,rec2,rec3,rec4]
    const instagram=[post1,post2,post3,post4,post5,post6]
  return (
    <>
    <div className="container mx-auto">
  <div className="flex flex-wrap">
    {/* Left Column */}
    <div className="w-full lg:w-8/12 mb-5 lg:mb-0">
      <div className="space-y-6">
        
        {images.map((img, index) => (
            <article key={index} className="flex flex-col">
              <div className="relative">
                <img
                  className="w-3/4 rounded-lg mt-12"
                  src={img}
                  alt=""
                />
                
              </div>
              <div className="mt-8">
                <a href="single-blog.html" className="text-xl font-semibold">
                Second divided from form fish beast made every of seas
all gathered us saying he our

                </a>
                <p className="mt-2 text-base">
                  That dominion stars lights dominion divide years for fourth
                  have don't stars is that he earth it first without heaven in
                  place seed it second morning saying.
                </p>
                <ul className="flex space-x-4 mt-3 text-sm">
                  <li>
                    <a href="#">
                      <i className="fa fa-user"></i> Travel, Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-comments"></i> 03 Comments
                    </a>
                  </li>
                </ul>
                <p className="excert text-base">
                  MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                </p>
                <p className="text-base">
                  MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                </p>
                <div className="quote-wrapper mt-4">
                  <div className="quotes text-base border-l-4 border-blue-500 pl-4">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                  </div>
                </div>
                <p className="text-base mt-4">
                  MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                </p>
                <p className="text-base mt-4">
                  MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                </p>
              </div>

              <div className="navigation-top mt-6">
              <div className="flex flex-wrap justify-between items-center text-center text-xs">
                <p className="like-info"><span className="align-middle"><i className="fa fa-heart"></i></span> Lily and 4 people like this</p>
                <div className="col-sm-4 text-center my-2 my-sm-0"></div>
                <ul className="social-icons flex space-x-4 text-blue-500">
                  <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
              <div className="navigation-area mt-6">
                <div className="flex flex-wrap">
                  <div className="lg:w-6/12 md:w-6/12 w-full flex flex-row items-center justify-start">
                    <div className="thumb">
                      <a href="#">
                        <img className="w-full h-auto" src={post6} alt="" />
                      </a>
                    </div>
                    <div className="arrow text-white">
                      <a href="#">
                        <span className="lnr ti-arrow-left"></span>
                      </a>
                    </div>
                    <div className="details ml-4">
                      <p className="text-xs">Prev Post</p>
                      <a href="#">
                        <h4 className="text-sm">Space The Final Frontier</h4>
                      </a>
                    </div>
                  </div>
                  <div className="lg:w-6/12 md:w-6/12 w-full flex flex-row items-center justify-end">
                    <div className="details mr-4">
                      <p className="text-xs">Next Post</p>
                      <a href="#">
                        <h4 className="text-sm">Telescopes 101</h4>
                      </a>
                    </div>
                    <div className="arrow text-white">
                      <a href="#">
                        <span className="lnr ti-arrow-right"></span>
                      </a>
                    </div>
                    <div className="thumb">
                      <a href="#">
                        <img className="w-full h-auto" src={post3} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-author mt-6 ml-36 ">
              <div className="media flex items-center bg-gray-50 w-3/4 h-56 rounded-lg">
                <img src={author1} alt="" className="w-16 h-16 rounded-full" />
                <div className="media-body ml-4">
                  <a href="#">
                    <h4 className="text-sm font-medium text-center">Harvard Milan</h4>
                  </a>
                  <p className="text-xs text-gray-700 text-center">Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from</p>
                </div>
              </div>
            </div>
            <div className="comments-area mt-6">
              <h4 className="text-sm font-medium">05 Comments</h4>
              <div className="comment-list mt-4 ">
                <div className="single-comment flex justify-between">
                  <div className="user flex">
                    <div className="thumb">
                      <img src={com} alt="" className="w-12 h-12 rounded-full" />
                    </div>
                    <div className="desc ml-4">
                      <p className="comment text-xs">
                        Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                      </p>
                      <div className="flex justify-between text-xs">
                        <div className="flex items-center">
                          <h5><a href="#" className="text-blue-500">Emilly Blunt</a></h5>
                          <p className="date ml-2">December 4, 2017 at 3:12 pm</p>
                        </div>
                        <div className="reply-btn">
                          <a href="#" className="btn-reply text-blue-500 uppercase">Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Repeat comment-list blocks for other comments */}
                <div className="single-comment flex justify-between mt-10">
                  <div className="user flex">
                    <div className="thumb">
                      <img src={com1} alt="" className="w-12 h-12 rounded-full" />
                    </div>
                    <div className="desc ml-4">
                      <p className="comment text-xs">
                        Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                      </p>
                      <div className="flex justify-between text-xs">
                        <div className="flex items-center">
                          <h5><a href="#" className="text-blue-500">Emilly Blunt</a></h5>
                          <p className="date ml-2">December 4, 2017 at 3:12 pm</p>
                        </div>
                        <div className="reply-btn">
                          <a href="#" className="btn-reply text-blue-500 uppercase">Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-comment flex justify-between mt-10">
                  <div className="user flex">
                    <div className="thumb">
                      <img src={com2} alt="" className="w-12 h-12 rounded-full" />
                    </div>
                    <div className="desc ml-4">
                      <p className="comment text-xs">
                        Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                      </p>
                      <div className="flex justify-between text-xs">
                        <div className="flex items-center">
                          <h5><a href="#" className="text-blue-500">Emilly Blunt</a></h5>
                          <p className="date ml-2">December 4, 2017 at 3:12 pm</p>
                        </div>
                        <div className="reply-btn">
                          <a href="#" className="btn-reply text-blue-500 uppercase">Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              </div>
            </article>
          ))}
        {/* Pagination */}

    
      </div>
    </div>

    {/* Right Column */}
    <div className="w-full lg:w-1/4">
      <div className="space-y-6">
        {/* Search Widget */}
        <aside className="bg-gray-100 p-4 rounded-lg shadow-sm mt-12">
          <form action="#">
            <div className="relative mb-3">
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring"
                placeholder="Search Keyword"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-500"
              >
                <i className="ti-search"></i>
              </button>
            </div>
            <button className="w-full py-2 bg-gray-700 text-white rounded ">
              Search
            </button>
          </form>
        </aside>

        {/* Category Widget */}
        <aside className="bg-white p-4 rounded-lg shadow-sm ">
          <h4 className="font-semibold mb-4">Category</h4>
          <ul className="space-y-2">
            {["Resaurant food", "Travel news", "Modern technology", "Product", "Inspiration", "Health Care"].map(
              (category, index) => (
                <li key={index} className="flex justify-between text-sm">
                  <a href="#">{category}</a>
                  <span className="text-gray-400">(37)</span>
                </li>
              )
            )}
          </ul>
        </aside>

        {/* Recent Post Widget */}
        <aside className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold mb-4">Recent Post</h4>
          {recent.map(
            (post, index) => (
              <div key={index} className="flex items-center space-x-3 mb-4">
                <img
                  src={post}
                  alt="post"
                  className="w-16 h-16 rounded-lg"
                />
                <div>
                  <a href="single-blog.html" className="text-sm font-semibold">
                    From life was you fish...
                  </a>
                  <p className="text-xs text-gray-500">
                    {index === 0
                      ? "January 12, 2019"
                      : `${index + 1} Hours ago`}
                  </p>
                </div>
              </div>
            )
          )}
        </aside>

        {/* Tag Cloud Widget */}
        <aside className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold mb-4">Tag Clouds</h4>
          <ul className="flex flex-wrap gap-2 text-xs">
            {[
              "project",
              "love",
              "technology",
              "travel",
              "restaurant",
              "life style",
              "design",
              "illustration",
            ].map((tag, index) => (
              <li key={index} className="bg-gray-200 p-2 rounded">
                <a href="#">{tag}</a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Instagram Feeds */}
        <aside className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold mb-4">Instagram Feeds</h4>
          <ul className="grid grid-cols-3 gap-2">
            {instagram
              .map((ista, index) => (
                <li key={index}>
                  <a href="#">
                    <img
                      className="w-full h-16 object-cover rounded-lg"
                      src={ista}
                      alt=""
                    />
                  </a>
                </li>
              ))}
          </ul>
        </aside>

        {/* Newsletter Widget */}
        <aside className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <form action="#">
            <div className="mb-3">
              <input
                type="email"
                className="w-full p-2 border rounded focus:outline-none focus:ring"
                placeholder="Enter email"
                required
              />
            </div>
            <button className="w-full py-2 bg-primary text-white rounded">
              Subscribe
            </button>
          </form>
        </aside>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Singleblog