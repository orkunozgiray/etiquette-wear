import React, { useState } from 'react';
import { AnnSliderData } from './AnnSliderData';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { 
    AnnContainer, 
    AnnWrapper, 
    AnnColumn, 
    Row1,
    Row2, 
    TextWrapper, 
    AnnH1, 
    ButtonWrap,
    AnnButton,
    Slider,
    LeftArrow,
    RightArrow
} from './AnnouncementElements';

const Announcement = ({
    id, 
    imgStart, 
    lightText, 
    headline, 
    buttonLabel, 
    primary,
    dark,
    dark2,
    slides
    }) => {

    const [current2, setCurrent] = useState(0);
    const length2 = slides.length;

    const nextSlide = () => {
        setCurrent(current2 === length2 - 1 ? 0 : current2 + 1);
    };

    const prevSlide = () => {
        setCurrent(current2 === 0 ? length2 - 1 : current2 - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>
            <AnnContainer id={id}>
                <AnnWrapper>
                    <AnnColumn imgStart={imgStart}>
                        <Row1>
                            <Slider>
                                <LeftArrow>
                                    <FaArrowLeft onClick={prevSlide} />
                                </LeftArrow>
                                <RightArrow>
                                    <FaArrowRight onClick={nextSlide} />
                                </RightArrow>
                                {AnnSliderData.map((slide, index) => {
                                    return (
                                        <div
                                            className={index === current2 ? 'slide active' : 'slide'}
                                            key={index}
                                        >
                                            {index === current2 && (
                                            <img src={slide.image} alt='cloth' className='image' />
                                            )}
                                        </div>
                                    );
                                })}
                            </Slider>
                        </Row1>
                        <Row2>
                            <TextWrapper>
                                <AnnH1 lightText={lightText}>{headline}</AnnH1>
                                <ButtonWrap>
                                    <AnnButton 
                                        to='news'
                                        duration={500}
                                        exact='true'
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </AnnButton>
                                </ButtonWrap>
                            </TextWrapper>        
                        </Row2>
                    </AnnColumn>
                </AnnWrapper>
            </AnnContainer>
        </>
    );
}

export default Announcement;
