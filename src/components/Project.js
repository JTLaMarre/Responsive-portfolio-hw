import React, { Component, Fragment } from 'react'


const projects = [
    {
        name: 'Pizza Tracker',
        img: "./images/Pizza.PNG",
        deploy: "https://pizza--tracker.herokuapp.com/"
    },
    {
        name: 'TrailHeads',
        img: "./images/trailheads.PNG",
        deploy: "https://lu-gflores.github.io/TrailHeads/"
    },
    {
        name: 'weatherDash',
        img: "./images/weatherdash.PNG",
        deploy: "https://jtlamarre.github.io/Weather_dashboard/"
    },
    {
        name: 'Work Day Schedule',
        img: "./images/Work day scheduler.PNG",
        deploy: "https://jtlamarre.github.io/Day_Planner/"
    },
    {
        name: 'Burger Game',
        img: "./images/Screenshot.PNG",
        deploy: "https://sheltered-chamber-49316.herokuapp.com/"
    },
    {
        name: 'Employee Directory',
        img: "./images/EmployScreen1.PNG",
        deploy: "https://jtlamarre.github.io/EmployeeDirectory/"
    },
]



class Project extends Component {
    render() {
        return (
            <Fragment>
            {projects.map((project)=>(

            <div className=" column is-one-quarter">
                <div className="box">
                    <img src={project.img} alt={project.name} className="project"></img>
                    <h1 className="is-size-3">{project.name}</h1>
                    <br></br>
                    <a href={project.deploy}>Deployed Here</a>
                </div>
            </div>
            ))}
            </Fragment>
        )
    }
}
export default Project