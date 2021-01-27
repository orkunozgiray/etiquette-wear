import React, { useState } from 'react';
import Video from './videos/main.mp4';
import { 
    HeroContainer, 
    HeroBackground, 
    VideoBackground,
    HeroContent,
    HeroH1,
    HeroP,
    HeroButtonWrapper,
    HeroButton1,
    HeroButton2,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const Hero = () => {

    const [hover, setHover] = useState(false);
    
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id=''>
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBackground>
            <HeroContent>
                <HeroH1>Etiquette</HeroH1>
                <HeroP>Bla bla bla bla</HeroP>
                <HeroButtonWrapper>
                    <HeroButton1
                        to='/'
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                    >
                        Shop Now
                    </HeroButton1>
                    <HeroButton2
                        to='/'
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                    >
                        Discover {hover ? 
                        <ArrowForward /> : 
                        <ArrowRight />}
                    </HeroButton2>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default Hero;
