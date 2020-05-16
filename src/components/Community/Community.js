import React from 'react';

import "./Community.css"
import GitHubIcon from '@material-ui/icons/GitHub';

const Community = () => {
    return (
        <main className="community-page">
            <div className="header-area">
                <h1 className="body-header">Join The Community!</h1>
                <h3 className="body-subheader">Come Say Hi in the discord or contribute to the github!</h3>
            </div>
            <div className="community buttons">
                <a href="https://discord.gg/sFpMKVX" target="_blank" rel="noreferrer noopener" className="discord-button">
                    <img src={`${process.env.PUBLIC_URL}/discord.png`} alt="custom discord logo"></img>
                    Join The Discord
                </a>
                <a href="https://github.com/DisTwitchChat" target="_blank" rel="noreferrer noopener" className="github-button"><GitHubIcon /><span>Github</span></a>
            </div>
        </main>
    );
}

export default Community;
