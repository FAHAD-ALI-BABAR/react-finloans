import React from 'react'
import blogs1 from "../../Images/blogs1.webp"
import blogs2 from "../../Images/blogs2.webp"
import blogs3 from "../../Images/blogs3.webp"
import blogs4 from "../../Images/blogs4.webp"
import blogs5 from "../../Images/blogs5.webp"
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
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
const Bloggs = () => {
    const images=[blogs1,blogs2,blogs3,blogs4,blogs5]
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
                <a
                  href="#"
                  className="absolute top-0 left-0 bg-primary text-white p-2 rounded"
                >
                  <h3 className="text-lg bg-blue-500 py-6 px-8 rounded-md absolute top-80 ml-9 font-bold">15</h3>
                  <p className="text-base absolute top-80 ml-16 text-white">Jan</p>
                </a>
              </div>
              <div className="mt-8">
                <a href="single-blog.html" className="text-xl font-semibold">
                  Google inks pact for new 35-storey office
                </a>
                <p className="mt-2 text-sm">
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
              </div>
            </article>
          ))}
        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
              
            </a>
          </nav>
        </div>
      </div>
    </div>
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

export default Bloggs