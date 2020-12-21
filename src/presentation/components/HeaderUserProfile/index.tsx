import React, { useMemo } from 'react'

interface IProps {
    userImage?: String;
    userName?: String;
}

const HeaderUserProfile = ({ userImage = '', userName = 'N' }: IProps) => {

    const avatar = useMemo(() => {
        if (userImage) {
            return <img src="" alt="" />
        }
        return <span>{userName}</span>
    }, [userImage, userName])

    return (
        <div className="header-user-profile">
            <div className="header-user-profile__avatar">
                {avatar}
                <span className="header-user-profile__avatar__status"></span>
            </div>
        </div>
    )
}

export default HeaderUserProfile;
