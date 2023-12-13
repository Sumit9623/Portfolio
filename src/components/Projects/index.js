import React from 'react'
import { Container, Wrapper, Title, Desc, CardContainer} from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects in the Domain of full stack Web Developement. Here are some of my projects.
        </Desc>

        <CardContainer>
          {projects.map((project) => (
              <ProjectCard project={project}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects