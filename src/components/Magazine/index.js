import React from 'react';
import { 
    MagazineContainer,
    MagazineWrapper,
    MagazineRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Column2,
    ImgWrap,
    Img,
    ButtonWrap,
    MagazineButton
} from './MagazineElements';

const Magazine = ({ id, imgStart, img, alt }) => {
    return (
        <>
            <MagazineContainer id={id}>
                <MagazineWrapper>
                    <MagazineRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Topline</TopLine>
                                <Heading>headline</Heading>
                                <Subtitle>description</Subtitle>
                                <ButtonWrap>
                                    <MagazineButton 
                                        to='blog'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                    >
                                        MagazineButton
                                    </MagazineButton>
                                </ButtonWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </MagazineRow>
                </MagazineWrapper>
            </MagazineContainer>
        </>
    );
}

export default Magazine;
