import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Personal Portfollio .
      </SectionTitle>
      <SectionText>
        Hi, There! I'm <b style={{ color: "red" }}>Pramit Mondal</b> , A Mern Stack Developer. I am pursuing B.Tech. in Computer Science and Engineering at <a href='https://aot.edu.in/' style={{ color: "greenyellow" }}>Academy of Technology</a>, Kolkata, India.


      </SectionText>
      <Button onClick={() => window.location = "https://drive.google.com/file/d/1lH5P725k-_8L4U-g0VomKvBVMxRyOJeK/view?usp=share_link"}>Hire Me</Button>

    </LeftSection>
  </Section>
);

export default Hero;
