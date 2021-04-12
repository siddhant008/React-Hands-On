import "./App.css";
import CourseDetails from "./components/CourseDetails";
import BookDetails from "./components/BookDetails";
import BlogDetails from './components/BlogDetails';


function App() {
  const courses = [
    {
      id: "1",
      name: "Angular",
      date: "4/5/2021",
    },
    {
      id: "2",
      name: "React",
      date: "6/3/2021",
    },
  ];

  const books = [
    {
      id: "1",
      name: "Deep dive into Angular 11",
      price: "800",
    },
    {
      id: "2",
      name: "Master React",
      price: "670",
    },
    {
      id: "3",
      name: "Mongo Essentials",
      price: "450",
    },
  ];

  const blogs = [
    {
      id: "1",
      name: "React Learning",
      author: "Stephen Biz",
      desc: "Welcome to learning React"
    },
    {
      id: "2",
      name: "Installation",
      author: "Schewzdenier",
      desc: "You can install React from npm"
    },
  ];
  return (
    <div className="App">
      <div className="list">
        <CourseDetails courseList={courses} />
      </div>
      <div className="list">
        <BookDetails bookList={books} />
      </div>
      <div className="list">
        <BlogDetails blogList={blogs} />
        </div>
    </div>
  );
}

export default App;
