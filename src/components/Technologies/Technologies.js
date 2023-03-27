import React from 'react';
import { DiFirebase, DiReact, DiJavascript, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle><br />Experience</SectionTitle>
    <SectionText>

    </SectionText>
    <List>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            C ,C++,Java,
            <br />Html,Css,Js
          </ListParagraph>

        </ListContainer>

      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>

        </ListContainer>

      </ListItem>

      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js
          </ListParagraph>

        </ListContainer>

      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            Oracle SQL and Mongo DB
          </ListParagraph>

        </ListContainer>

      </ListItem>
    </List>
  </Section >
);

export default Technologies;
