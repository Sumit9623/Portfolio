
import React from 'react'
import styled from 'styled-components'
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding : 0px 0px 50px 0px
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    font-family:cursive;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;



const index = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                    My work experience as a software engineer and working on different companies and projects.
                </Desc>
                <ExperienceContainer>
                    {
                        experiences.map((experience) => (<ExperienceCard experience={experience}/>))
                    }
                </ExperienceContainer>
            </Wrapper>
        </Container>
    )
}

export default index