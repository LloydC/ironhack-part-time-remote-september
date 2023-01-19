 import projectsData from './../projects-data.json';
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
 
function ProjectDetailsPage(props) {
const [foundProject, setFoundProject] = useState(null); 
  console.log('useParams', useParams())
  const { projectId } = useParams();
  console.log('projectId -->', projectId);
  
  useEffect(()=>{
    const project = projectsData.find((projectObj) => {
        return projectObj._id === projectId;
      })

      if (project) {
        setFoundProject(project);
      }
  }, [projectId])

// Fetch data from an API example
//   useEffect(() => {
//     // Get the project by id from the server
//     axios.get('http://example.com/api/projects/' + projectId)
//       .then((response) => {
//         setFoundProject(response.data);
//       })
    
//   }, [projectId]);

//   const foundProject = projectsData.find((project) => project._id === projectId)
//   console.log('foundProject', foundProject)
  return (
    <div>
      <h1>Project Details</h1>

      {!foundProject && <h3>Project not found!</h3>}

      {foundProject && <div>
            <h3>{foundProject.name}</h3>
            <p>{foundProject.year} - {foundProject.description}</p>
        </div>}
      
      <Link to="/projects">Back</Link>
    </div>
  )
}
 
export default ProjectDetailsPage;