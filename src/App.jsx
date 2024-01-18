import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getPosts } from "./features/post/postSlice";
import { useEffect } from "react";
import Post from "./components/post";
import { MdAdd } from "react-icons/md";

function App() {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector(
    (store) => store.posts
  );

  const handleAddClick = () => {};

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="font-poppins flex flex-col min-h-screen">
      <header className="h-[80px] bg-[#80BCBD] flex justify-between items-center text-white">
        <div>
          <p className="text-5xl font-medium ml-8">Posts</p>
        </div>
        <div>
          <button
            className="text-5xl mr-8"
            onClick={handleAddClick}
          >
            <MdAdd />
          </button>
        </div>
      </header>
      <div className="flex gap-5 flex-wrap p-5 bg-[#AAD9BB] flex-auto">
        {data.map((post) => {
          return <Post key={post._id} {...post} />;
        })}
      </div>
    </div>
  );
}

export default App;
