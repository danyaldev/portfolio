import React from 'react';

export default function Aboutme(props: any) {
  return (
    <>
      <div className=" gap-5 flex justify-center items-center flex-wrap pt-12">
      
          <div>
            <div className="w-96 h-[400px]   rounded-md bg-slate-500 bg-opacity-30 flex flex-col text-center p-5">
              <h1 className="text-3xl m-2">About Me</h1>
              <p className="m-5">
                A passionate full stack web-developer that enjoys creating
                interactive applications and experiences on the web
              </p>
              <button
                onClick={props.scroll}
                className="m-4 px-2 py-1 w-24  mx-auto  rounded-sm border-solid border-2 hover:bg-slate-800 hover:text-slate-300 hover:scale-110 transition-all duration-200"
              >
                {'Projects'}
              </button>
              <div className="">
                <h1 className="text-3xl text-center mx-auto">
                  Want to know More?
                </h1>

                <a href=" mailto: danyalali0682@gmail.com">
                  <button className=" p-1 rounded-sm px-4 bg-emerald-500 my-4 hover:scale-110 transition-all duration-200 ">
                    get in touch
                  </button>
                </a>
              </div>
            </div>
          </div>
        <div>
          <div className="w-96 h-[400px]   rounded-md bg-slate-500 bg-opacity-30 flex flex-col text-center p-5">
            <h1 className="text-3xl m-2">Skills</h1>

            <div className="flex flex-col">
              <h2 className="mb-2 text-emerald-500 text-2xl">
                Web Development
              </h2>
              <p>
                I can create beautiful and dynamic websites using a wide range
                of technologies
              </p>

              <h2 className="mb-2 text-emerald-500 text-2xl">Design</h2>
              <p>
                Able to create modern designs, from mockups to interactive
                prototypes
              </p>

              <h2 className="mb-2 text-emerald-500 text-2xl">Hosting</h2>
              <p>Can manage hosting and maintain server</p>
            </div>

            <a href="/Danyal Ali CV.pdf">
              <button className="mt-3   px-2 py-1 w-24  mx-auto  rounded-sm border-solid border-2 hover:bg-slate-800 hover:text-slate-300 hover:scale-110 transition-all duration-200">
                {'CV'}
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
