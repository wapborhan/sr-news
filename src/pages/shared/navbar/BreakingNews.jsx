import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex items-center justify-start">
      <div className="bg-red-500 p-3 ml-3 text-white mr-2">Latest</div>
      <Marquee pauseOnHover={true} className="space-y-5 flex items-center">
        <p className="mr-10">
          {" "}
          I can be a React component, multiple React components, or just some
          text.
        </p>
        <p>
          {" "}
          I can be a React component, multiple React components, or just some
          text.
        </p>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
