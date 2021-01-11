import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import MainLayout from "@/presentation/layouts/MainLayout"
import HomePageHeader from "@/presentation/components/HomePage/HomePageHeader/HomePageHeader"
import HomePageContent from "@/presentation/components/HomePage/HomePageContent/HomePageContent"
import HomePageSideExtend from "@/presentation/components/HomePage/HomePageSideExtend/HomePageSideExtend"
import HomePageTextEditor from "@/presentation/components/HomePage/HomePageTextEditor/HomePageTextEditor"
import { getAllChannel } from "@/presentation/redux/channel/action"

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  getAllChannel
}

const connector = connect(mapStateToProps, mapDispatchToProps)

const HomePage = ({ getAllChannel }) => {
  const [toggleExtendSide, setToggleExtendSide] = useState(false);

  useEffect(() => {
    getAllChannel()
  }, [getAllChannel])

  return (
    <MainLayout>
      <div className={`home-page ${toggleExtendSide ? 'side-extend-active' : ''}`}>
        {/* <div className="home-page__content" onClick={() => setToggleExtendSide(!toggleExtendSide)}> */}
        <div className="home-page__content" onClick={() => {}}>
          <HomePageHeader />
          <HomePageContent />
          <HomePageTextEditor />
        </div>
        <div className="home-page__side-extend">
          <HomePageSideExtend />
        </div>
      </div>
    </MainLayout>
  )
}


export default connector(HomePage)