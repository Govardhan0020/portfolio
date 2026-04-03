import { useState, useEffect } from "react";
import { useTheme } from "../hooks/ThemeContext";

export const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    fetch("https://api.github.com/users/Govardhan0020/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const namesToFilter = [
    "MernchatApp",
    "portfolio",
    "react-todoList",
    "react-Todo-List-with-edit-and-update-multiple-fields",
    "react-Meme-Generator",
    "react---search-and-filter-in-functional-componnt",
  ];

  const filteredData = repos.filter((item) =>
    namesToFilter.includes(item.name),
  );

  return (
    <div
      className={`p-4 mt-15 px-4
            ${theme === "dark" ? "bg-black " : "bg-white "} `}
    >
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-8 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredData.map((repo) => (
            <div
              key={repo.id}
              className={`p-4 rounded-lg border transition duration-300
            ${
              theme === "dark"
                ? "bg-black text-white border-white"
                : "bg-white text-black border-black border-1"
            } hover:scale-105`}
            >
              <h2 className="text-lg ">{repo.name}</h2>

              <p className="text-sm mt-1">
                {repo.description || "No description"}
              </p>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block underline"
              >
                View Repo
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
