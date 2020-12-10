import React, { useState } from "react"
import MainLayout from "@/layouts/MainLayout"
import HomePageHeader from "@/components/HomePage/HomePageHeader/HomePageHeader"
import HomePageContent from "@/components/HomePage/HomePageContent/HomePageContent"
import HomePageSideExtend from "@/components/HomePage/HomePageSideExtend/HomePageSideExtend"
import HomePageTextEditor from "@/components/HomePage/HomePageTextEditor/HomePageTextEditor"
export default function Home() {
  const [toggleExtendSide, setToggleExtendSide] = useState(false);

  return (
    <MainLayout>
      <div className={`home-page ${toggleExtendSide ? 'side-extend-active' : ''}`}>
        <div className="home-page__content" onClick={() => setToggleExtendSide(!toggleExtendSide)}>
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
