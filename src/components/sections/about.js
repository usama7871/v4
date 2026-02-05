import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
    }
  }
`;

const StyledPic = styled.div`
  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green-tint);
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  // Updated skills from CV
  const skills = [
    'Python',
    'TypeScript',
    'LangChain',
    'OpenAI Agents SDK',
    'n8n',
    'Next.js',
    'PyTorch',
    'TensorFlow',
    'RAG / Retrieval',
    'MERN Stack',
    'MEAN Stack',
    'PERN Stack',
    'GitHub Copilot',
    'Docker',
    'Firebase',
    'Jupyter Notebook',
    'Flutter',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              <strong>USAMA M ABDULLAH</strong> — Full Stack Developer, Agentic AI Developer & Automation Specialist.
              Fast-learning developer focused on agentic AI using Python, TypeScript, LangChain,
              OpenAI Agents SDK, and n8n. Built production AI agents, RAG pipelines, and automated
              workflows with seamless API integrations in freelance work. Eager to ship scalable,
              impactful AI solutions.
            </p>

            <p>
              Technical highlights: designed and implemented retrieval-augmented generation (RAG) pipelines,
              built autonomous agents using LangChain and OpenAI Agents SDK, and automated workflows with n8n.
              Experienced integrating third-party APIs, optimizing systems for reliability, and deploying
              production-ready AI services.
            </p>

            <p>
              Contact: Email <a href="mailto:kğusamakhan1234@gmail.com">kusamakhan1234@gmail.com</a> •
              Phones: +92 315 499 6438, +92 305 215 0446 • Location: Karachi, Pakistan
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            {/* Replace the image file with the file you will upload: src/images/profile_usama.jpg */}
            <StaticImage
              className="img"
              src="../../images/profile_usama.jpg"
              width={500}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="USAMA ABDULLAH — Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;