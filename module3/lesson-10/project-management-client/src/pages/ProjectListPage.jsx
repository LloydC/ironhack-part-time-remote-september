import { useState, useEffect } from "react";
import axios from "axios";
import AddProject from "../components/AddForm";
import ProjectCard from "../components/ProjectCard";
 
// const API_URL = "http://localhost:5005";
 
 
function ProjectListPage() {
  const [projects, setProjects] = useState([]); // 1. State variable initialised
 
  const getAllProjects = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };
 
  // 3. We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, [] );
 
  // 2. display what't in our return statement
  return (
    <div className="ProjectListPage">
      <AddProject getAllProjects={getAllProjects }/>

        {projects.map((project) => <ProjectCard key={project._id} {...project} /> )}     
       
    </div>
  );
}
 
export default ProjectListPage;