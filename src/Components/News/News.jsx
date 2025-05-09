import { FaStar, FaEye, FaBookmark, FaShare } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router";

const News = ({ news }) => {
  const { id, title, thumbnail_url, details, author, total_view, rating } = news;

  const formattedDate = format(
    new Date(author.published_date),
    "EEEE, MMMM d, yyyy"
  );

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden my-7 flex flex-col">
      {/* Header */}
      <div className="bg-gray-100 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="text-gray-600 hover:text-secondary cursor-pointer">
            <FaBookmark />
          </button>
          <button className="text-gray-600 hover:text-secondary cursor-pointer">
            <FaShare />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-5 pt-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      </div>

      {/* Thumbnail */}
      <div className="p-5">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full rounded-md object-cover"
        />
      </div>

      {/* Details */}
      <div className="px-5 text-sm text-gray-700 flex-grow">
        {details.length > 300 ? details.slice(0, 300) + "..." : details}
      </div>

      {/* Read More Button */}
      <div className="px-5 py-3">
        <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold hover:underline">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="border-t px-5 py-3 flex justify-between items-center text-sm text-gray-600">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-700">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default News;
