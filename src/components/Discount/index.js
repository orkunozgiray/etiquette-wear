import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { 
    DiscountContainer, 
    DiscountWrapper, 
    DiscountColumn, 
    Row1,
    Row2, 
    TextWrapper, 
    DiscountH1, 
    // DiscountP, 
    ButtonWrap,
    DiscountButton,
    // ImgWrap,
    // Img,
    Slider,
    LeftArrow,
    RightArrow
} from './DiscountElements';

const Discount = ({
    id, 
    imgStart, 
    lightText, 
    headline, 
    darkText, 
    description,
    buttonLabel, 
    // img, 
    // alt,
    primary,
    dark,
    dark2,
    slides
    }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <>
            <DiscountContainer id={id}>
                <DiscountWrapper>
                    <DiscountColumn imgStart={imgStart}>
                        <Row1>
                            <Slider>
                                <LeftArrow>
                                    <FaArrowLeft onClick={prevSlide} />
                                </LeftArrow>
                                <RightArrow>
                                    <FaArrowRight onClick={nextSlide} />
                                </RightArrow>
                                {SliderData.map((slide, index) => {
                                    return (
                                        <div
                                            className={index === current ? 'slide active' : 'slide'}
                                            key={index}
                                        >
                                            {index === current && (
                                            <img src={slide.image} alt='travel image' className='image' />
                                            )}
                                        </div>
                                    );
                                })}
                            </Slider>
                            {/* <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap> */}
                        </Row1>
                        <Row2>
                            <TextWrapper>
                                <DiscountH1 lightText={lightText}>{headline}</DiscountH1>
                                {/* <DiscountP darkText={darkText}>{description}</DiscountP> */}
                                <ButtonWrap>
                                    <DiscountButton 
                                        to='sale'
                                        duration={500}
                                        exact='true'
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </DiscountButton>
                                </ButtonWrap>
                            </TextWrapper>        
                        </Row2>
                    </DiscountColumn>
                </DiscountWrapper>
            </DiscountContainer> 
        </>
    );
}

export default Discount;
