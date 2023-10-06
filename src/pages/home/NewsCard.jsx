import { Link } from "react-router-dom";

const NewsCard = ({ singlenews }) => {
  const { _id, title, details, image_url, author, total_view, rating } =
    singlenews;
  console.log(singlenews);
  return (
    <div className="news-card border-2 rounded-md">
      <div className="head bg-gray-200">
        <div className="border-2 rounded-full bg-red flex justify-between">
          <div className="left flex gap-4 p-3">
            <div className="image">
              <img src={author?.img} alt="Pic" className="rounded-full w-14" />
            </div>
            <div className="con">
              <h2>{author?.name}</h2>
              <p>{author?.published_date}</p>
            </div>
          </div>
          <div className="right">
            <span>bookmarl</span>
            <span>Share</span>
          </div>
        </div>
      </div>
      <div className="body p-5 space-y-5">
        <h1 className="font-bold">{title}</h1>
        <img src={image_url} alt="" className="rounded-lg" />
        <p>
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`} className="text-orange-400 ml-6">
                Read More...
              </Link>
            </>
          ) : (
            details
          )}
        </p>
        <hr />
      </div>

      <div className="foot p-5 flex justify-between">
        <div className="ratings">
          <span>O</span>
          <span>O</span>
          <span>O</span>
          <span>O</span>
          <span>O</span>
          {rating?.number}
        </div>
        <div className="view">{total_view}</div>
      </div>
    </div>
  );
};

export default NewsCard;
