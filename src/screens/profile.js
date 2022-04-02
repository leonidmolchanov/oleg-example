import React from "react";
import {useSelector} from "react-redux";

const ProfileScreen = () => {

    const profile = useSelector(state=>state.app.profile)

    return (
<div>
        { profile ?
        <div>
            <p>{`Имя-${profile.name}`}</p>
            <p>{`Телефон-${profile.phone}`}</p>
            <p>{`Емайл-${profile.email}`}</p>


            {/*<p>{JSON.stringify(name)}</p>*/}
        </div>
        :
        <p>Нет данных, Вы козел!</p>
        }
</div>
    );
}

export default ProfileScreen
