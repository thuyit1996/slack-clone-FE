import React from 'react'
import { TiStarOutline } from 'react-icons/ti'
import { BsInfoCircle } from 'react-icons/bs'
import { RiUserAddLine } from 'react-icons/ri'
import HeaderUserProfile from '@/components/HeaderUserProfile'

export default function HomePageHeader() {
    return (
        <div className="home-page-header">
            <div className="home-page-header__title">
                <div className="home-page-header__title__channel-name">
                    <span className="channel-name">general</span>
                    <TiStarOutline />
                </div>
                <span className="home-page-header__title__option">Add a topic</span>
            </div>
            <div className="home-page-header__group-user">
                <div className="home-page-header__group-user__list-user">
                    <HeaderUserProfile />
                    <HeaderUserProfile />
                    <HeaderUserProfile />
                    <HeaderUserProfile />
                </div>
                <div className="home-page-header__group-user__tool">
                    <div className="tool-icon">
                        <RiUserAddLine size={20} color="#000" />
                    </div>
                    <div className="tool-icon">
                        <BsInfoCircle size={20} color="#000" />
                    </div>
                </div>
            </div>
        </div>
    )
}
