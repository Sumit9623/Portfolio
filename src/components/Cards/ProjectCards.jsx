import React from 'react'
import styled from 'styled-components'

const Description = styled.div`
    width:100%
    font-weight: 400;
    font-family:cursive;
    color: ${({ theme }) => theme.text_secondary + 99};
    font-size:15px;
    margin-left:6px
`
const Card = styled.div`
    width: 500px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;

    overflow: hidden;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        height:max-content;
        transform: translateY(-3px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }

    @media only screen and (max-width: 530px){
        width: 90vw;
    }

`
const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width:95%;
    display: flex;
    margin :0px 10px;
    flex-direction: column;
    gap: 0px;
    -webkit-line-clamp: 1;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 90};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`
const BtnGrp = styled.div`
    display : flex;
    flex-direction:row;
    width :100%;
    align-items:center;

    justify-content:space-around;
`
export const ProjectButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    text-align: center;
    border-radius:6px;
    padding:10px;
    width : 45%;
    margin-top:6px;
    color:${({ theme }) => theme.white};
    cursor: pointer;
    font-weight: 600;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 15px;
    }
`
const ProjectCards = ({project}) => {
    return (
        <Card>
            <img src={require('../../images/CineVerse.jpg')}/>
            <Tags>
                {project.tags?.map((tag) => (
                    <Tag>{tag}</Tag>
                    ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <BtnGrp>
                <ProjectButton href={project.liveLink}>Live Project</ProjectButton>
                <ProjectButton href={project.githubLink}>GitHub Link</ProjectButton>
            </BtnGrp>
        </Card>
    )
}

export default ProjectCards
