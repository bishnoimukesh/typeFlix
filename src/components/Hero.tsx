const Hero = () => {
  return (
    <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg")] 
    h-full w-full bg-cover bg-center p-20'>
      <div className="h-full flex flex-col items-center justify-center">
        <h1 className="mb-2 text-6xl font-extrabold text-white text-center">
          The biggest Indian hits. Ready to watch here from ₹ 149.
        </h1>
        <p className="text-2xl p-4 font-bold text-center text-white">
          Join today. Cancel anytime.
        </p>
          <p className="text-2xl text-center text-white">
          Ready to watch? Enter your email to create or restart your membership.
          </p>
        <div className="mt-4">
          <button className="px-6 py-2 text-lg text-center text-white bg-red-500 rounded-md shadow-md">
            Get started 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
