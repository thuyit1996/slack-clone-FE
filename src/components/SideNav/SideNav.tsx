import React, { useState } from "react"
import { BiMessageEdit, BiMessageSquareDetail, BiDotsVerticalRounded } from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TiMessages } from 'react-icons/ti'
import { VscTriangleRight } from 'react-icons/vsc'
import { connect, ConnectedProps } from "react-redux"

const mapStateToProps = state => ({
  closeSideNav: state.app.closeSideNav
})

const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> { }

function SideNav(props: Props) {
  const [toggleChannels, setToggleChannels] = useState(false);
  const [toggleDirectMessage, settoggleDirectMessage] = useState(false);

  return (
    <div className="side-nav">
      <div className="side-nav__header">
        <div className="side-nav__header__drop-box">
          <span>RabitinternalDev</span>
          <MdKeyboardArrowDown size={18} />
        </div>
        <div className="side-nav__header__new-message side-nav-item">
          <BiMessageEdit size={25} color="#350D36" />
        </div>
      </div>
      <div className="side-nav__content">
        <div className="side-nav__content__threads side-nav-item">
          <div className="side-nav-item__title">
            <div className="side-nav-item__icon">
              <BiMessageSquareDetail />
            </div>
            <span>Threads</span>
          </div>
        </div>
        <div className="side-nav__content__all-dms side-nav-item">
          <div className="side-nav-item__title">
            <div className="side-nav-item__icon">
              <TiMessages />
            </div>
            <span>All DMs</span>
          </div>
        </div>
        <div className="side-nav__content__mentions-reaction side-nav-item">
          <div className="side-nav-item__title">
            <div className="side-nav-item__icon">
              <span>@</span>
            </div>
            <span>Mentions & reactions</span>
          </div>
        </div>
        <div className="side-nav__content__more side-nav-item">
          <div className="side-nav-item__title">
            <div className="side-nav-item__icon">
              <BiDotsVerticalRounded />
            </div>
            <span>More</span>
          </div>
        </div>
        <div className={`side-nav__content__channels side-nav-item ${toggleChannels ? 'side-nav-active' : ''}`}>
          <div className="side-nav-item__title" onClick={() => setToggleChannels(!toggleChannels)}>
            <div className="side-nav-item__icon">
              <VscTriangleRight />
            </div>
            <span>Channels</span>
          </div>
          <div className="channels-content">
            <ul className="channels-content__list-item">
              <li className="channels-content-item">genneral</li>
              <li className="channels-content-item">random</li>
              <li className="channels-content-item">tech</li>
            </ul>
          </div>
        </div>
        <div className={`side-nav__content__direct-message side-nav-item ${toggleDirectMessage ? 'side-nav-active' : ''}`}>
          <div className="side-nav-item__title" onClick={() => settoggleDirectMessage(!toggleDirectMessage)}>
            <div className="side-nav-item__icon">
              <VscTriangleRight />
            </div>
            <span>Direct message</span>
          </div>
        </div>
      </div>
    </div >
  )
}

export default connector(SideNav)
