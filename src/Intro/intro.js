import React from "react";
import IntroHeader from './IntroHeader';
import IntroBody from './IntroBody';
import IntroSidebar from './IntroSidebar';

function Intro() {
    return (
        <div>
            <IntroHeader/>
            <div className='IndexWrap'>
                <IntroSidebar/>
                <IntroBody/>
            </div>
        </div>
    )
}

export default Intro;