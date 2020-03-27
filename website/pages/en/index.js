/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

// const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {

    render() {
        const {siteConfig} = this.props;

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
        const {baseUrl} = siteConfig;

        const Block = props => (
            <Container
                id={props.id}
                background={props.background}>
                <GridBlock
                    padding={['top', 'bottom']}
                    align="left"
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );

        const CenterBlock = props => (
            <Container id={props.id} background={props.background}>
                <GridBlock
                    align="center"
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );

        const Title = () => (
            <div className="toptitle">
                <Block>
                    {[
                        {
                            image: `${baseUrl}img/test.svg`,
                        },
                        {
                            content:
                                '<span class="title">Time-series data, faster</span>' +
                                '<p class="left subTopTitle">QuestDB is a SQL open-source time-series database to store, stream and query data - faster</p>' +
                                '<br>' +
                                '<ul class="buttons">' +
                                '<li class="cta"><a href="/getstarted">Get QuestDB</a></li>' +
                                '</ul>'
                        }
                    ]
                    }
                </Block>
            </div>
        );

        const WhatWeDo = () => (
            <div className="whatwedo">
                <Block layout="twoColumn">
                    {[
                        {
                            content: '<span class="title">Features</span>'
                        },
                    ]}
                </Block>

                <div className="featuresList">
                    <Block layout="threeColumn">
                        {[
                            {
                                image: `${baseUrl}img/ossicon.svg`,
                                content:
                                    '<div class="subtitle">Apache 2.0</div>'
                            },
                            {
                                image: `${baseUrl}img/speedicon.svg`,
                                content:
                                    '<div class="subtitle">SIMD accelerated</div>'
                            },
                            {
                                image: `${baseUrl}img/table.svg`,
                                content:
                                    '<div class="subtitle">Relational Model</div>'
                            },
                            {
                                image: `${baseUrl}img/packageicon.svg`,
                                content:
                                    '<div class="subtitle">Cross-platform package</div>'
                            },
                            {
                                image: `${baseUrl}img/sqlicon.svg`,
                                content:
                                    '<div class="subtitle">Query Optimiser</div>'
                            },
                            {
                                image: `${baseUrl}img/usersicon.svg`,
                                content:
                                    '<div class="subtitle">Fast for concurrent users</div>'
                            },
                            {
                                image: `${baseUrl}img/joinsicon.svg`,
                                content:
                                    '<div class="subtitle">Relational joins</div>'
                            },
                            {
                                image: `${baseUrl}img/charticon.svg`,
                                content:
                                    '<div class="subtitle">Time-series joins</div>'
                            },
                            {
                                image: `${baseUrl}img/unlimtransacticon.svg`,
                                content:
                                    '<div class="subtitle">Unlimited transaction size</div>'
                            },

                        ]}
                    </Block>
                </div>
            </div>
        );


        const Demo = () => (
            <div className="demo">
                <CenterBlock className="titlecenter">
                    {[
                        {
                            content: '<span class="title">Live demo coming up</span>',
                        },
                    ]}
                </CenterBlock>
                <Block layout="twoColumn">
                    {[
                        {
                            content: '<ul class="announcement">' +
                                '<li>' +
                                '<span class="headline">Large dataset sandbox </span>' +
                                '<span class="summary">1.6 billion rows NY taxi rides, 800 million for-hire vehicle trips, hourly weather observations, gas prices, etc. Accessible without any download</span>' +
                                '</li>' +
                                '<li>' +
                                '<span class="headline">Attainable hardware</span>' +
                                '<span class="summary">Hosted on single general-purpose AWS bare metal. No expensive data sharding / distributed queries. No need for expensive GPU nor terabytes of RAM</span>' +
                                '</li>' +
                                '<li>' +
                                '<span class="headline">Arbitrary SQL queries</span>' +
                                '<span class="summary">Test QuestDB through queries you like over the entire dataset' +
                                '</span>' +
                                '</li>' +
                                '</ul>'
                        },
                        {
                            content: '<ul class="announcement">' +
                                '<li>' +
                                '<span class="headline">Sub-second query execution</span>' +
                                '<span class="summary">Execute all queries under a second on this 1.6bn rows dataset</span>' +
                                '</li>' +
                                '<li>' +
                                '<span class="headline">Parallel SQL execution</span>' +
                                '<span class="summary">Low overhead work split </br> and work-stealing</span>' +
                                '</li>' +
                                '<li>' +
                                '<span class="headline">Time series joins</span>' +
                                '<span class="summary">Time-series sampling, and </br> joining on arbitrary </br> timestamps</span>' +
                                '</li>' +
                                '<li>' +
                                '<span class="headline">Vectorized aggregation</span>' +
                                '<span class="summary">SIMD based SQL intrinsics</span>' +
                                '</li>' +
                                '</ul>'
                        },
                    ]}
                </Block>
            </div>
        );

        const SignUpForm = () => (
            <div className="flip-box">
                <div className="flip-box-inner" id="jsSignUpFlipInner">
                    <div className="signup shadow">
                        <div className="signup-inner">
                            <span className="why">Be the first to experience our demo</span>
                            <form method="post" id="jsSignupForm"
                                  action="https://questdb.us4.list-manage.com/subscribe/post?u=ded0bfce4eb932e7617add7c5&amp;id=0e88cd5ecb"
                                  name="mc-embedded-subscribe-form"
                                  target="_blank" noValidate>
                                <ul>
                                    <li><label>First name</label></li>
                                    <li><input name="FNAME" type="text" placeholder="John"/></li>
                                    <li><label>Last name</label></li>
                                    <li><input name="LNAME" type="text" placeholder="Doe"/></li>
                                    <li><label>Email</label></li>
                                    <li><input id="jsInputEmail" name="EMAIL" type="text" placeholder="john@acme.com"/>
                                    </li>
                                    <li className="send"><a href="" id="jsSignUp">GET EARLY ACCESS</a></li>
                                </ul>
                                <div style={{display: 'none'}}>
                                    <input type="text" name="b_ded0bfce4eb932e7617add7c5_0e88cd5ecb" tabIndex="-1"
                                           value="" readOnly={true}/>
                                    <input type="submit" name="subscribe" value="submit" readOnly={true}/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="signup-back shadow">
                        <img src={'/img/thumb-up-outline-symbol.svg'} alt="thumbs up!"/>
                        <div className="headline">Thank you!</div>
                        <div className="summary"> Please check your inbox to confirm your signup.</div>
                    </div>
                </div>
            </div>
        );


        const SQL = () => (
            <div className="sql">
                <Block layout="twoColumn">
                    {[
                        {
                            content:
                                '' +
                                '<span class="title">Express yourself</span>' +
                                'Just write SQL. Let questDB look after the performance while you focus on the data.' +
                                '<br><br>' +
                                '<b>Less indexing and profiling. More ingesting and querying!</b>'
                        },
                    ]}
                </Block>
            </div>
        );

        const Integrations = () => (
            <div className='interfaces'>
                <span className="title">Integrations</span>
                <p>Any tool and language via Postgres wire protocol. High-performance HTTP API, Influx line protocol and
                    Telegraf.</p>
                <Block layout="threeColumn">
                    {[
                        {
                            image: `${baseUrl}img/interfaces.jpg`,
                        }]}
                </Block>

            </div>
        );

        const ConsoleGIF = () => (
            <div className='consoleGIF'>
                <img src={'/img/sql.gif'} alt="sql example" className={'shadow'}/>
            </div>
        );

        return (
            <div>
                <HomeSplash siteConfig={siteConfig} language={language}/>
                <div className="mainContainer index">
                    <Title/>
                    <Demo/>
                    <SignUpForm/>
                    <SQL/>
                    <ConsoleGIF/>
                    <WhatWeDo/>
                    {/*<Perf/>*/}
                    <Integrations/>
                </div>
            </div>
        );
    }
}

module.exports = Index;
