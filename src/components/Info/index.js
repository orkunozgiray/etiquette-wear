import React from 'react';
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoColumn, 
    Row1,
    Row2, 
    TextWrapper, 
    InfoH1, 
    InfoP, 
    ButtonWrap,
    InfoButton,
    ImgWrap,
    Img 
} from './InfoElements';

const Info = ({
    lightBg, 
    id, 
    imgStart, 
    lightText, 
    headline, 
    darkText, 
    description,
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark2
    }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoColumn imgStart={imgStart}>
                        <Row1>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Row1>
                        <Row2>
                            <TextWrapper>
                                <InfoH1 lightText={lightText}>{headline}</InfoH1>
                                <InfoP darkText={darkText}>{description}</InfoP>
                                <ButtonWrap>
                                    <InfoButton 
                                        to='blog'
                                        duration={500}
                                        exact='true'
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </InfoButton>
                                </ButtonWrap>
                            </TextWrapper>        
                        </Row2>
                    </InfoColumn>
                </InfoWrapper>
            </InfoContainer>            
        </>
    );
}

export default Info;
