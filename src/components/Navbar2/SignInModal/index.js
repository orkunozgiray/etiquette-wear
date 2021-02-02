import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import {
    Background,
    ModalWrapper,
    ModalImg,
    ModalContent,
    CloseModalButton,
    SignInBtn,
    SignUpBtn,
    ModalP
} from './SignInModalElements';

export const SignInModal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();
  
    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });
  
    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
          console.log('I pressed');
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );
  
    return (
      <>
        {showModal ? (
          <Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
                <ModalImg src={require('./images/discount.jpg').default} alt='illustration' />
                <ModalContent>
                  <ModalP>Get Special Offers</ModalP>
                  <SignUpBtn
                    to='signup'
                  >
                    Create my Account
                  </SignUpBtn>
                  <SignInBtn
                    to='login'
                  >
                    Sign In
                  </SignInBtn>
                </ModalContent>
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                />
              </ModalWrapper>
            </animated.div>
          </Background>
        ) : null}
      </>
    );
  };

export default SignInModal;
