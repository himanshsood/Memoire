// // // import { useEffect, useState } from "react";
// // // import Header from "../../components/header/Header";
// // // import Posts from "../../components/posts/Posts";
// // // import Sidebar from "../../components/sidebar/Sidebar";
// // // import "./home.css";
// // // import axios from "axios";
// // // import { useLocation } from "react-router";

// // // export default function Home() {
// // //   const [posts, setPosts] = useState([]);
// // //   const { search } = useLocation();

// // //   useEffect(() => {
// // //     const fetchPosts = async () => {
// // //       const res = await axios.get("/posts" + search);
// // //       setPosts(res.data);
// // //     };
// // //     fetchPosts();
// // //   }, [search]);
// // //   return (
// // //     <>
// // //       <Header />
// // //       <div className="home">
// // //         <Posts posts={posts} />
// // //       </div>
// // //     </>
// // //   );
// // // }


// // import { useEffect, useState } from "react";
// // import Header from "../../components/header/Header";
// // import Posts from "../../components/posts/Posts";
// // import "./home.css";
// // import axios from "axios";
// // import { useLocation, useNavigate } from "react-router-dom";

// // export default function Home() {
// //   const [posts, setPosts] = useState([]);
// //   const [query, setQuery] = useState(""); // State for the search input
// //   const { search } = useLocation();
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchPosts = async () => {
// //       const res = await axios.get("/posts" + search);
// //       setPosts(res.data);
// //     };
// //     fetchPosts();
// //   }, [search]);

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     if (query) {
// //       navigate(`?search=${encodeURIComponent(query)}`);
// //     } else {
// //       navigate("/");
// //     }
// //   };

// //   return (
// //     <>
// //       <Header />
// //       <div className="home">
// //         <form onSubmit={handleSearch} className="searchForm">
// //           <input
// //             type="text"
// //             placeholder="Search posts..."
// //             value={query}
// //             onChange={(e) => setQuery(e.target.value)}
// //             className="searchInput"
// //           />
// //           <button type="submit" className="searchButton">
// //             Search
// //           </button>
// //         </form>
// //         <Posts posts={posts} />
// //       </div>
// //     </>
// //   );
// // }



// import { useEffect, useState } from "react";
// import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
// import "./home.css";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function Home() {
//   const [posts, setPosts] = useState([]);
//   const [query, setQuery] = useState(""); // State for the search input
//   const { search } = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await axios.get("/posts" + search);
//       setPosts(res.data);
//     };
//     fetchPosts();
//   }, [search]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (query) {
//       navigate(`?search=${encodeURIComponent(query)}`);
//     } else {
//       navigate("/");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="home">
//         <form onSubmit={handleSearch} className="searchForm">
//           <input
//             type="text"
//             placeholder="Search posts..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="searchInput"
//           />
//           <button type="submit" className="searchButton">
//             Search
//           </button>
//         </form>
//         <Posts posts={posts} />
//       </div>
//     </>
//   );
// }


import { useEffect, useState } from "react";
import Header from "../../components/header/Header"; // Assumed Header renders the photo
import Posts from "../../components/posts/Posts";
import "./home.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState(""); // State for the search input
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`?search=${encodeURIComponent(query)}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="home">
      <h1 className="homeTitle">.</h1>
      <Header />
      <form onSubmit={handleSearch} className="searchForm">
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="searchInput"
        />
        <button type="submit" className="searchButton">
          Search
        </button>
      </form>
      <Posts posts={posts} />
    </div>
  );
}
