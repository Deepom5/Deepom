import React, { useState, useEffect } from "react"
// Styled Components
import { Container, Flex } from "../../styles/globalStyles"
//Framer Motion
import { motion, useAnimation } from "framer-motion"
//Home Component
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionContent,
  AccordionIcon,
  FeaturedProjects
} from "../../styles/homeStyles"
//Context
import { useGlobalStateContext } from "../../context/globalContext"
//Scroll Observer
import { useInView } from "react-intersection-observer"
import HomeSkill from "./HomeSkill"
// Accordion Data
const accordionIds = [
  {
    id: 0,
    title: "Web Design",
    results: [
      "Creative Development",
       "Clean Design",
      "User-Friendly",
      "Intractive",
      "Art Direction",
      "Creative Direction",
      
    ],
  },
  {
    id: 1,
    title: "Web Development",
    results: [
      "Responsive Design",
      "Creative Development",
      "Efficient Code",
      "React js",
      "Gatsby",
    ],
  },
  {
    id: 2,
    title: "App Interface",
    results: [
      "Innovative Design",
      "Creative direction",
      "Clean ",
      "Animation and motion graphics",
      "Updated with new trends",
    ],
  },
  {
    id: 3,
    title: "Android App Developoment",
    results: [
      "Quick and Efficient",
      "React Native",
      "Quality control",
      "User-friendly",
      
    ],
  },
]

const HomeAbout = ({ onCursor }) => {
  //Default state, using number for our id. Which ever the number/id is in the state. That will be opened.
  const [expanded, setExpanded] = useState(0)
  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    // Giving our scrollwheel additional 300px before executing animation
    rootMargin: "-150px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeAboutSection
      ref={aboutRef}
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
        <Flex alignTop>
          <About>
            <h2>
            Software Engineer who loves to transform ideas into reality using code. I am an<em> full-stack web and android </em>developer and UI/UX enthusiast. 
            </h2>
            <p>
            With over two years of experience developing web applications and android application and over one year of experience of freelancing using the latest front-end and UI/UX development Technologies.Motivated designer and developer with experience creating custom websites with ReactJs, JavaScript, HTML5, and CSS3. Strong collaboration skills and proven history of application development. 
            </p>
          </About>
          <Services>
            <h3>Services</h3>
            {accordionIds.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursor={onCursor}
              />
            ))}
          </Services>
        </Flex>
        <Container>
        <FeaturedProjects>
          <Flex flexEnd>
            <button>
              <span>SKILLSET</span>
            </button>
          </Flex>
        </FeaturedProjects>
      </Container>
        <Flex>

        <HomeSkill
                
                imageSrc={require(`../../assets/images/kisspng-game-react-native-javascript-android-physics-5ac6d5f51879e8.6623465115229803411003.png`)}
                title="React js"
              />
              <HomeSkill
               
                imageSrc={require(`../../assets/images/kisspng-javascript-logo-html-comment-blog-5ae63c23139110.5436874015250381150802.png`)}
                title="Javascript"
              />
              <HomeSkill
                
                imageSrc={require(`../../assets/images/kisspng-html-web-design-scalable-vector-graphics-world-wid-html5-icon-hd-5ab0c85c377aa0.0639325615215350682273.png`)}
                title="HTML"
              />
              <HomeSkill
                
                imageSrc={require(`../../assets/images/kisspng-web-development-cascading-style-sheets-css3-comput-css-5ada20be5eed10.7390827615242446703888.png`)}
                title="CSS"
              />

             <HomeSkill
                
                imageSrc={require(`../../assets/images/kisspng-responsive-web-design-sass-cascading-style-sheets-framework-5aceb5887fa3e2.5482162815234963285228.png`)}
                title="SCSS"
              />
               <HomeSkill
                
                imageSrc={require(`../../assets/images/thumb_retina_styled-components.png`)}
                title="Styled Components"
              />
               <HomeSkill
                
                imageSrc={require(`../../assets/images/kisspng-github-repository-commit-version-control-github-5ab8bdf71d6218.7448464515220566951204.png`)}
                title="Github"
              />
               <HomeSkill
                
                imageSrc={require(`../../assets/images/kisspng-responsive-web-design-bootstrap-sass-cascading-sty-framework-5acb894bc4c191.9841223815232883958059.png`)}
                title="Bootstrap"
              />
               <HomeSkill
                
                imageSrc={require(`../../assets/images/kisspng-node-js-javascript-openshift-node-border-5ae302abebca79.1379848815248267959658.png`)}
                title="Node js"
              />
               <HomeSkill
                
                imageSrc={require(`../../assets/images/kisspng-firebase-cloud-messaging-computer-icons-google-clo-github-5ad5d3ce4fc460.4730334415239628303267.png`)}
                title="Firebase"
              />
               <HomeSkill
                
                imageSrc={require(`../../assets/images/kisspng-database-logo-brand-product-design-computer-mongodb-5b6d9c941dafa2.5542815515339101641216.png`)}
                title="Mongo DB"
              />
               <HomeSkill
                
                imageSrc={require(`../../assets/images/kisspng-redux-react-javascript-angular-cascading-style-she-github-5ab8a3eea4d727.7909830515220500306752.png`)}
                title="Redux"
              />
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordion = ({ details, expanded, setExpanded, onCursor }) => {
  const isOpen = details.id === expanded
  const [hovered, setHovered] = useState(false)
  const { currentTheme } = useGlobalStateContext()
  return (
    <>
      <AccordionHeader
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        whileHover={{
          color: !isOpen && currentTheme === "dark" ? "#ffffff" : "#000000",
        }}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  )
}

export default HomeAbout
