import React from "react";
import s from './ProfileInfo.module.css'
import imgAva from '../../../assets/original.jpg';

const ProfileInfo = () => {

    return (
        <div>
            <div className={s.backgroundImg}>
                <img src={imgAva} alt="background"/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;