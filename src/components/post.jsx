import { IoClose } from "react-icons/io5";

function Post(prop) {
  const { _id, title, content, author, likeCount } = prop;
  return (
    <div className="max-w-[500px] min-w-[400px] h-fit rounded shadow-2xl p-4 bg-white overflow-hidden">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl mb-3 truncate">{title}</h1>
        <div className="text-3xl">
          <button>
            <IoClose />
          </button>
        </div>
      </div>
      <p className="min-h-60 truncate text-wrap">
        {content}
      </p>
      <p className="text-right">{author}</p>
      <div className="flex gap-4 items-center mt-4">
        <span>{likeCount}</span>
        <button className="px-3 py-1 bg-blue-400 rounded-md text-white">
          Like
        </button>
      </div>
    </div>
  );
}

export default Post;
