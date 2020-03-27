/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {

    render() {
        const {siteConfig, language = ''} = this.props;
        const {baseUrl, docsUrl} = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

        const SplashContainer = props => (
            <div className="homeContainer">
                <div className="homeSplashFade">
                    <div className="wrapper homeWrapper">{props.children}</div>
                </div>
            </div>
        );

        const ProjectTitle = () => (
            <span/>
        );

        return (
            <SplashContainer>
                <div className="inner">
                    <ProjectTitle siteConfig={siteConfig}/>
                </div>
            </SplashContainer>
        );
    }
}


class Index extends React.Component {

    render() {
        const {config: siteConfig, language = ''} = this.props;
        const {baseUrl, docsUrl} = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;

        const Block = props => (
            <Container
                id={props.id}
                background={props.background}>
                <GridBlock
                    padding={['top', 'bottom']}
                    align="justified"
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );


        const Venture = () => (
            <div className="">
                <div className="about-content-wide center">
                    <span className="title colored bold center">Backed by</span>
                    <ul className="vc-list">
                        <li><a href="https://www.episode1.com/" target="_blank"><img className="vc-img"
                                                                                     src='/img/E1.png'
                                                                                     alt="Episode1 Ventures"/></a></li>
                        <li><a href="http://seedcamp.com/" target="_blank"><img className="vc-img" src='/img/sdc.png'
                                                                                alt="Seedcamp"/></a></li>
                        <li><a href="http://7pc.co/" target="_blank"><img className="vc-img" src='/img/7pct.png'
                                                                          alt="7% ventures"/></a></li>
                        <li><a href="https://www.kimaventures.com/" target="_blank"><img className="vc-img"
                                                                                         src='/img/kima.png'
                                                                                         alt="Kima ventures"/></a></li>
                    </ul>
                </div>
            </div>
        );


        const Board = () => (
            <div className="about-page-highlight">
                <div className="about-content-wide center">
                    <span className="title colored bold center">Meet The Team</span>
                    <ul className="headshot-list">
                        <li>
                            <a href="https://www.linkedin.com/in/nicolas-hourcard-cfa-b7349b37/" target="_blank">
                                <figure>
                                    <img className="team-img" src='/img/nic.jpg'/>
                                    <figcaption><a className="team-name">Nicolas Hourcard </a> <br/>Co-Founder & CEO
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/ilyushchenko/" target="_blank">
                                <figure>
                                    <img className="team-img" src='/img/vlad.jpg'/>
                                    <figcaption><a className="team-name">Vlad Ilyushchenko </a> <br/> Co-Founder & CTO
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/tancrede-collard-35228926/" target="_blank">
                                <figure>
                                    <img className="team-img" src='/img/tanc.jpg'/>
                                    <figcaption><a className="team-name">Tancrède Collard</a> <br/> Co-Founder & CPO
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );


        const Title = () => (
            <div className="toptitle about-title">
                <span className="title">About QuestDB</span>
            </div>
        );
        const Contact = () => (
            <div className="bottom-padding about-page-highlight">
                <div className="about-content-wide">
                    <span className="title colored bold center no-margin-bottom">Contact</span>

                    <div className="center contact-details">
                        <Block layout="threeColumn">
                            {[
                                {
                                    content: '<span class="center"><a href="tel:00442080881225">+44(0)2 080 881 225</a></span><br/>',
                                    image: `${baseUrl}img/phone.svg`
                                },
                                {
                                    content: '<span class="center">70 WILSON STREET, 1ST FLOOR, LONDON EC2A 2DB</span><br/>',
                                    image: `${baseUrl}img/location.svg`
                                },
                                {
                                    content: '<span class="center">hello@questdb.io</span><br/>',
                                    image: `${baseUrl}img/email.svg` 
                                }, 
                                {
                                    content: '<span class="center"><a href="https://join.slack.com/t/questdb/shared_invite/enQtNzk4Nzg4Mjc2MTE2LTEzZThjMzliMjUzMTBmYzVjYWNmM2UyNWJmNDdkMDYyZmE0ZDliZTQxN2EzNzk5MDE3Zjc1ZmJiZmFiZTIwMGY>">Join our Slack</a></span><br/>',
                                    image: `${baseUrl}img/slack.svg`
                                },
                            ]}
                        </Block>
                    </div>
                </div>
            </div>
        );


        const Map = () => (
            <div className="">
                <div className="">
                    <div className="map-block">
                        <iframe width="100%" height="700" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=70%20wilson%20street%20ec2a%202db&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
            </div>
        );

        /*
                <div className="address">QuestDB <br/> 70 WILSON STREET <br/> 1ST FLOOR <br/> LONDON EC2A 2DB</div>*/

        const ContactInfo = () => (
            <div className="contact-box">
                <Block className="contact-block" layout="threeColumn">
                    {[
                        {
                            content: '<span class="center"><a href="tel:00442080881225">+44(0)2 080 881 225</a></span><br/>',
                            image: `${baseUrl}img/phone.svg`
                        },
                        {
                            content: '<span class="center">70 WILSON STREET, 1ST FLOOR, LONDON EC2A 2DB</span><br/>',
                            image: `${baseUrl}img/location.svg`
                        },
                        {
                            content: '<span class="center">hello@questdb.io</span><br/>',
                            image: `${baseUrl}img/email.svg` 
                        }, 
                        {
                            content: '<span class="center"><a href="https://join.slack.com/t/questdb/shared_invite/enQtNzk4Nzg4Mjc2MTE2LTEzZThjMzliMjUzMTBmYzVjYWNmM2UyNWJmNDdkMDYyZmE0ZDliZTQxN2EzNzk5MDE3Zjc1ZmJiZmFiZTIwMGY>">Join our Slack</a></span><br/>',
                            image: `${baseUrl}img/slack.svg`
                        },
                        
                    ]}
                </Block>
            </div>
        );

        return (
            <div>
                <HomeSplash siteConfig={siteConfig} language={language}/>
                <div className="mainContainer aboutpage">
                    <Title/>
                    <Board/>
                    <Venture/>
                    <ContactInfo/>
                    <Map/>
                </div>
            </div>
        );
    }
}


module.exports = Index;
