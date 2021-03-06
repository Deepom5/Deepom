import React, { useEffect, useRef } from "react"

// Scroll Animations
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

//Styled Components
import { Container, Flex } from "../styles/globalStyles.js"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles.js"

//Icons
import { Instagram, Facebook,Linkedin} from "../assets/svg/social-icons.js"

//Custom Hooks
import useElementPosition from "../hooks/useElementPosition.js"

const Footer = ({ setHamburgerPosition, onCursor }) => {
  const instagramRef = useRef(null)
  const instagramPosition = useElementPosition(instagramRef)

  const facebookRef = useRef(null)
  const facebookPosition = useElementPosition(facebookRef)

  const linkedinRef = useRef(null)
  const linkedinPosition = useElementPosition(linkedinRef)


  const animation = useAnimation()
  const [footerRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  })
  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  const menuHover = x => {
    onCursor("locked")
    setHamburgerPosition({ x: x })
  }

  return (
    <FooterNav
      ref={footerRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            <p href="Tel: +919620986114">+91 9620986114</p>
            <p href="mailto: chowdhurydeepom@gmail.com">Chowdhurydeepom@gmail.com</p>
          </FooterContent>
          <FooterContent wider>
            
          <a href="https://www.linkedin.com/in/deepom-chowdhury-7b3651200/">
              © {new Date().getFullYear()}, made 
               by Deepom Chowdhury</a>
          </FooterContent>
          <FooterSocial>
            <a
              onMouseEnter={() => menuHover(instagramPosition.x)}
              onMouseLeave={onCursor}
              ref={instagramRef}
              href="https://www.instagram.com/deepomchowdhury/"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              onMouseEnter={() => menuHover(facebookPosition.x)}
              onMouseLeave={onCursor}
              ref={facebookRef}
              href="https://www.facebook.com/deepom.chowdhury/"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              onMouseEnter={() => menuHover(linkedinPosition.x)}
              onMouseLeave={onCursor}
              ref={linkedinRef}
              href="https://www.linkedin.com/in/deepom-chowdhury-7b3651200/"
              target="_blank"
            >
              <Linkedin />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
