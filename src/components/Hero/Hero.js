import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typewriter from 'typewriter-effect'

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center style={{paddingRight: "300px"}}>
    <div style={{fontSize: "55" , lineHeight: "1.2"}}><div><p>Intelligence</p></div>
   <Typewriter
  options={{
    strings: ['House', 'Hacker', 'Explorer'],
    autoStart: true,
    loop: true,
  }}
/> 
</div>
    </SectionTitle>
    <SectionText>
    A house for machine learning enthusiasts.<br/>
    Read the information sheet <a href="https://docs.google.com/document/d/1gdva3Ebr2xX7TijUL42lRBtvU9gJqb3JIofF1oGBhBI/edit?usp=sharing">here</a>.
    </SectionText>
    <Button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSd4se_7uiOBB_O3D94YbI0SxJBRup1-uwoCzm9mI-Of15Od8Q/viewform?usp=sf_link', '_blank')}>Apply
    </Button>

  </LeftSection>
</Section>
);

export default Hero;