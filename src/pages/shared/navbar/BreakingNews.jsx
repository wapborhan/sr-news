import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex">
      <div className="bg-red-500 p-3 ml-3 text-white mr-2">Latest</div>
      <Marquee pauseOnHover={true}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
