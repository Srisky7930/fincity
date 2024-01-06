import {Component} from 'react'

import './index.css'

class Projects extends Component {
  state = {
    projects: [],
    projectName: '',
    projectLink: '',
    description: '',
  }

  onChangeProjectName = event => {
    this.setState({
      projectName: event.target.value,
    })
  }

  onChangeProjectLink = event => {
    this.setState({
      projectLink: event.target.value,
    })
  }

  onChangeDescription = event => {
    this.setState({
      description: event.target.value,
    })
  }

  addProject = event => {
    event.preventDefault()
    const {projectName, projectLink, description} = this.state

    const addProject = {
      projectName,
      projectLink,
      description,
    }

    this.setState(prevState => ({
      projects: [...prevState.projects, addProject],
      projectName: '',
      projectLink: '',
      description: '',
    }))
  }

  render() {
    const {projects, projectName, projectLink, description} = this.state

    return (
      <div className="projects-container">
        <div>
          <h1> Add Projects </h1>
        </div>
        <div className="form-card">
          <form onSubmit={this.addProject}>
            <div className="card">
              <label htmlFor="name"> Project Name </label>
              <input
                type="text"
                id="name"
                onChange={this.onChangeProjectName}
                value={projectName}
              />
            </div>

            <div className="card">
              <label htmlFor="link"> Project Link </label>
              <input
                type="text"
                id="link"
                onChange={this.onChangeProjectLink}
                value={projectLink}
              />
            </div>

            <div className="card">
              <label htmlFor="description"> Description </label>
              <textarea
                type="text"
                id="description"
                onChange={this.onChangeDescription}
                value={description}
                className="text-area"
              />
            </div>
            <button type="submit"> Add </button>
          </form>
        </div>

        <div>
          <ul>
            {projects.map(each => (
              <li className="project-card">
                <div>
                  <h1 className="pro-name"> {each.projectName} </h1>
                  <p className="pro-description"> {each.description} </p>
                  <p className="pro-link"> Link: {each.projectLink} </p>
                  <button type="button" className="view-button">
                    View Project
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Projects
