import { useState, useEffect } from "react";
import { useTheme } from "../hooks/ThemeContext";

export const Projects = () => {
  const [repos, setRepos] = useState([]);
  const { theme } = useTheme();

  console.log(theme, " theme ");

  useEffect(() => {
    fetch("https://api.github.com/users/Govardhan0020/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.log(err));
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

  console.log(repos, filteredData, " repos data ");

  return (
    <div className="p-4 mt-15 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredData.map((repo) => (
          <div
            key={repo.id}
            className={`p-4 rounded-lg border transition duration-300
            ${
              theme === "dark"
                ? "bg-black text-white border-white"
                : "bg-white text-black border-black"
            } hover:scale-105`}
          >
            <h2 className="text-lg font-semibold">{repo.name}</h2>

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
    </div>
  );
};
