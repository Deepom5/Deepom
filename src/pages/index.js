import React from "react"
import Layout from "../components/layout.js"

//Components
import HomeContent from "../components/homePage/HomeContent.js"
import HomeFeatured from "../components/homePage/HomeFeatured.js"
import HomeAbout from "../components/homePage/HomeAbout.js"
import HomeBanner from "../components/homePage/HomeBanner.js"
//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext.js"

const IndexPage = props => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  return (
    <Layout>
      {console.log("props", props)}
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured onCursor={onCursor} />
      <HomeAbout onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
