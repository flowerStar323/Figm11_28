import React from "react";
import "../scss/FirstPage.css";
import "../scss/Header_First.scss";
class FirstPage extends React.Component {
    constructor() {
        super();
    }
    showlist = () => {
        document.querySelector(".fix-First-list").classList.toggle('test');
        document.querySelector(".Bar").classList.toggle('BarChange');
        document.querySelector(".mainImg").classList.toggle('MainBackChange');
        document.querySelector(".fix-First-list").classList.toggle('BarListChange');
        document.querySelector(".fix-First").classList.toggle('BarListChange');
    }
    render() {
        return (
            <div className="First-root">
                <div className="mainImg" />
                <div className="fix-First">
                    <div className="fix-First-mark">
                        Ghosties
                    </div>
                    <div className="fix-First-tabs">
                        <div>About</div>
                        <div>FAQs</div>
                        <div>Roadmap</div>
                        <div>Team</div>
                    </div>
                    <div className="fix-First-wallet">
                        <img src="img/discord.png" />
                        <img src="img/twitter.png" />
                        <img src="img/instagram.png" />
                        <img src="img/opensea.png" />
                    </div>
                    <div className="fix-First-responsive-bars" onClick={this.showlist}><img src="img/Bar.png" width="40px" className="Bar" /></div>
                </div>
                <div className="fix-First-list">
                    <ul className="fix-First-list-tabs">
                        <li>About</li>
                        <li>FAQs</li>
                        <li>Roadmap</li>
                        <li>Team</li>
                    </ul>
                </div>

                <div className="Container">
                    <div className="WindowGhosty">
                        <div className="WindowHeader">
                            <div className="WallterTitle">Ghosty Generator v4.02</div>
                            <div className="WalletCloseBtn"><img src="img/windowclose.png" /></div>
                        </div>
                        <div className="WalletMainText">
                            Would you like to connect your wallet?
                        </div>
                        <div className="walletBtn">
                            <div className="walletBtnOnf">
                                <img src="img/onf.png" />
                            </div>
                            <div className="walletBtnText">
                                CONNECT WALLET <img src="img/fox.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="GhostyGroup">
                    <div className="Ghosty1"><img src="img/Ghosty1.png" /></div>
                    <div className="Ghosty2"><img src="img/Ghosty2.png" /></div>
                    <div className="Ghosty3"><img src="img/Ghosty3.png" /></div>
                    <div className="Ghosty4"><img src="img/Ghosty4.png" /></div>
                </div>
                <div className="Ghosties">
                    {/* first category */}
                    <div className="FirstCategory">
                        <img src="img/G1.png" id="G1" />
                        <img src="img/G2.png" id="G2" />
                        <img src="img/G4.png" id="G4" />
                        <div className="GhostiesMainInside">
                            <div className="GhostiesMainInsideLeft">
                                <div className="whatGhosties">What are Ghosties?</div>
                                <div className="whatGhostiesContent">
                                    <div className="whatGhostiesContent1">
                                        They were supposed to haunt but instead they just chill.
                                    </div>
                                    <div className="whatGhostiesContent2">
                                        Ghosties are a collection of 10,001 completely unique NFT’s generated on the Ethereum blockchain.
                                    </div>
                                    <div className="whatGhostiesContent3">
                                        Each Ghostie will have one set of over 200k possible hand-drawn variations, making each one suuuuuper rare.
                                    </div>
                                </div>
                            </div>
                            <div className="GhostiesMainInsideRight">
                                <div className="WhatImg1">
                                    <img src="img/Artwork7.png" id="Artwork7" />
                                    <img src="img/Artwork6.png" id="Artwork6" />
                                </div>
                                <div className="WhatImg2">
                                    <img src="img/Artwork3.png" id="Artwork3" />
                                    <img src="img/Artwork9.png" id="Artwork9" />
                                </div>
                            </div>
                        </div>
                        <div className="MobileGhost1">
                            <img src="img/MobileGhost1.png" />
                        </div>
                        {/* SECOND CATEGORY */}
                        <div className="communityContentOut">
                            <div className="communityContent">
                                <div className="communityContentTitle">
                                    Community that looks out for each other
                                </div>

                                <div className="communityContent1">
                                    Ghosties are just trying to navigate the world as beings that exist in non-final forms seeking peace and meaning, so they band together. Their journey is not too different from the one we take as humans. We’re all seeking community and meaning in a similar way.
                                </div>
                                <div className="communityContent2">
                                    The Ghosties community is the place to connect and talk about whatever and make space for conversations about mental health. We’re fostering a space of openness and genuine support so we can be ourselves and lean on each other.
                                </div>
                                <div className="communityContent3">
                                    Come for the memes, TikToks, crypto moonshots, Attack on Titan, Minecraft, and then drop in to the share-good and seek-support channels to be heard and get useful information about mental wellbeing.
                                </div>
                                <div className="communityContent4">
                                    We’re here to support eachother ❤.️
                                </div>
                            </div>
                        </div>
                        {/* The vision category */}
                        <div className="MobileGhost2">
                            <img src="img/MobileGhost2.png" />
                        </div>
                        <div className="VisionContentOut">
                            <div className="VisionContent">
                                <div className="VisionContentTitle">
                                    The vision (aka the roadmap)
                                </div>

                                <div className="VisionContent1">
                                    So this is the part where we would layout a typical NFT roadmap, but this not a typical community or roadmap.
                                </div>

                                <div className="VisionContent2">
                                    Yes, there will be giveaways, incentive-based checkpoints and airdrops, but that’s not the the end goal so it’s not part of our vision. Our vision is to let the community guide the roadmap, more on that later 😉.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* F.A.Q. */}
                    <div className="FAQOut">
                        <img src="img/G3.png" id="G3" />
                        <div className="FAQContent">
                            <div className="FAQTitle">F.A.Q.</div>
                            <div className="MobileFAQ">
                                <div className="FAQTttle1">What is an NFT?</div>

                                <div className="FAQContent1">
                                    NFT stands for "non-fungible token." Basically an NFT is a digital asset that links ownership to unique physical or digital items, like artwork, music, real estate, monster-producing machines... whatever you can think of. NFTs are like the modern-day version of collectibles. The blockchain-based technology that NFT’s are built on makes it extremely difficult for digital assets to be replicated in any way.
                                </div>

                                <div className="FAQTttle2">How do I buy a Ghosty?</div>

                                <div className="FAQContent2">
                                    You will need to have a wallet that can store Eth. There are a few out there like Metamask, Rainbow, and Coinbase. Once you have a wallet you will connect it to our site, making you ready to begin buying a Ghostie once you have the funds needed. We will announce the pre-sale and public mint dates for you to be able to know when Ghosties are available to mint, which you’ll do from right here on our website on the floating computer above.
                                </div>
                                <div className="FAQContent3">
                                    When that time comes you will need to have the right amount of ETH ready to pay for whichever # of Ghosties you decide that you want to mint (up to 10). You’ll select ‘Mint Ghosty’ and then you’re done! Keep an eye on our Discord and Twitter for specific minting times.
                                </div>
                            </div>
                            <div className="FAQTttle3">
                                What does owning a Ghosty give me access to?
                            </div>
                            <div className="FAQContent4">
                                Owning a Ghosty gets you special access to our network of professional therapists and
                            </div>
                            <div className="FAQTttle4">
                                How will you be fair and transparent about minting?
                            </div>
                            <div className="FAQContent5">
                                The trust of our community is one of our top priorities. We will provide updates about the minting very soon! We will never DM you directly so watch out for spam. Keep an eye on our Discord and Twitter for all updates.
                            </div>
                        </div>
                    </div>
                    {/* Meet the team */}
                    <div className="MeetTeamOut">
                        <img src="img/G5.png" id="G5" />
                        <div className="MeetTeam">
                            <div className="MeetTitle">Meet the Team</div>
                            <div className="TeamMemberOut">
                                <div className="TeamMember">
                                    <div className="TeamMember1Out">
                                        <div className="TeamMember1Left">
                                            <div><img src="img/twitter.png" /></div>
                                        </div>
                                        <div className="TeamMember1Right">
                                            <img src="img/Artwork7.png" />
                                            <div>@chloestoutheart</div>
                                        </div>
                                    </div>
                                    <div className="TeamMember1Out">
                                        <div className="TeamMember1Left">
                                            <div><img src="img/twitter.png" /></div>
                                        </div>
                                        <div className="TeamMember1Right">
                                            <img src="img/Artwork6.png" />
                                            <div>@Gringo_hediondo</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="TeamMemberOut">
                                <div className="TeamMember">
                                    <div className="TeamMember1Out">
                                        <div className="TeamMember1Left">
                                            <div><img src="img/twitter.png" /></div>
                                        </div>
                                        <div className="TeamMember1Right">
                                            <img src="img/Artwork3.png" />
                                            <div>@metabakereth</div>
                                        </div>
                                    </div>
                                    <div className="TeamMember1Out">
                                        <div className="TeamMember1Left">
                                            <div><img src="img/twitter.png" /></div>
                                        </div>
                                        <div className="TeamMember1Right">
                                            <img src="img/Artwork9.png" />
                                            <div>@BrianWStout</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer */}
                    <div className="GhoFooter">
                        <div className="Gho2021">
                            <div className="Gho2021Left">Ghosties</div>
                            <div className="Gho2021Right">© 2021</div>
                        </div>
                        <div className="GhoFooterMiddle">
                            <div>About</div>
                            <div>FAQs</div>
                            <div>Roadmap</div>
                            <div>Team</div>
                        </div>
                        <div className="GhoFooterRight">
                            <img src="img/discord.png" />
                            <img src="img/twitter.png" />
                            <img src="img/instagram.png" />
                            <img src="img/opensea.png" />
                        </div>
                    </div>
                    <div className="TabletYear">© 2021</div>
                </div>
            </div >
        )
    }
}
export default FirstPage;