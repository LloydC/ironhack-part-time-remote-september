import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
 
 
function EditProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { projectId } = useParams();
  const navigate = useNavigate()

  const deleteProject = () => {                    //  <== ADD
    // Make a DELETE request to delete the project
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/projects/${projectId}`)
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of projects.
        navigate("/projects");
      })
      .catch((err) => console.log(err));
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    //update our project by sending a PUT request to the api
    const updatedProject = { title, description }
    axios.put(`${process.env.REACT_APP_API_URL}/api/projects/${projectId}`, updatedProject)
        .then(() => navigate(`/projects/${projectId}`))
        .catch( err => console.log(err))
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/projects/${projectId}`)
        .then(response => {
            setTitle(response.data.title)
            setDescription(response.data.description)
        })
        .catch(err => console.log(err))
  },[projectId])
  
  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>
 
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <input type="submit" value="Submit" />
      </form>

      <button onClick={deleteProject}>Delete Project</button>
    </div>
  );
}
 
export default EditProjectPage;