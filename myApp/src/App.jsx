import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div className="page_container">
      <h1>Welcome to Learn React</h1>
      <h3>With</h3>
      <h2>Utkarsh Gupta</h2>
      <p>Powered by Accio</p>
      <img src={reactLogo} alt="React Logo" className="course_logo" />
      <div className="container">
        <p className="container_title">Course Syllabus</p>
        <ul className="course_list ">
          <li className="course_list_item">Introduction to React</li>
          <li className="course_list_item">Components</li>
          <li className="course_list_item">Props</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
