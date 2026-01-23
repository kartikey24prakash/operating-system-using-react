import React from 'react'
import githubdata from "../../assets/github.json"
import  Macwindow  from './MacosWindow'
import "./github.scss"

const Gitcard=({data = { id:1,image:"",title:"",description:"",tags:[],repolink:"",demoLink:"",}})=>{

    return <div className="card">
        <img src={data.image} alt=""/>
        <h1>{data.title}</h1>
        <p className="description">{data.description}</p>
        <div className="tags">
            {data.tags.map((tag=> <p className='tag'>{tag}</p>))}
        </div>
        <div className="url">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink && <a href={data.demoLink}>Demo link</a>}
        </div>
    </div>
}

const Github = () => {
  return (
    <Macwindow>
        <div className="cards">
            {githubdata.map(project => {
                return <Gitcard data={project}/>

            })}

        </div>

    </Macwindow>
  )
}

export default Github
