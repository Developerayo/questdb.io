/*
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

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

        const Title = () => (
            <div className="startTitle">
                <Block>
                    {[
                        {
                            content:
                                '<span class="title" id="getStartedTitle">Welcome to QuestDB</span>'
                        }
                    ]}
                </Block>
            </div>
        );

        const GetStarted = () => (
            <div className="start" id="start">
                <div className="startlist">
                    <Block layout="threeColumn">
                        {[
                            {
                                content:
                                    '<img src="img/package.svg" id="packageIcon" alt="Install"/>' +
                                    '<div class="subtitle bold">Get QuestDB</div>',
                            },
                            {
                                content:
                                    '<img src="img/tuto.svg" id="tutoIcon" alt="Discover QuestDB"/>' +
                                    '<div class="subtitle bold">Discover QuestDB</div>'
                            },
                            {
                                content:
                                    ' <img src="img/community.svg" id="questionIcon" alt="QuestDB Community"/>' +
                                    '<div class="subtitle bold">QuestDB Community</div>'
                            },
                        ]}
                    </Block>
                </div>
            </div>
        );

        const GetStartedSubQuestion = () => (
            <div className="start" id="getStartedQuestion">
                <div className="startlist">
                    <Block layout="twoColumn">
                        {[
                            {
                                content:
                                    '<a  href="https://join.slack.com/t/questdb/shared_invite/enQtNzk4Nzg4Mjc2MTE2LTEzZThjMzliMjUzMTBmYzVjYWNmM2UyNWJmNDdkMDYyZmE0ZDliZTQxN2EzNzk5MDE3Zjc1ZmJiZmFiZTIwMGY>"><img src="img/slack.svg" alt="Slack"/></a>' +
                                    '<div class="subtitle bold">Join QuestDB on Slack</div>',
                            },
                            {
                                content:
                                    '<a  href="https://github.com/questdb/questdb/issues"><img src="img/github.svg" alt="GitHub"/></a>' +
                                    '<div class="subtitle bold">Raise an issue on Github</div>',
                            },
                        ]}
                    </Block>
                </div>
            </div>
        );

        const GetStartedSubTuto = () => (
            <div className="start" id="getStartedTuto">
                <div className="startlist">
                    <Block layout="twoColumn">
                        {[
                            {
                                content:
                                    '<a  href="/docs/myFirstDatabase"><img src="img/rocket.svg" alt="Database tutorial"/></a>' +
                                    '<div class="subtitle bold">First Database tutorial</div>',
                            },
                            {
                                content:
                                    '<a  href="/docs/crudOperations"><img src="img/crud.svg" alt="CRUD how-to"/></a>' +
                                    '<div class="subtitle bold">Learn to perform CRUD operations</div>',
                            },

                        ]}
                    </Block>
                </div>
            </div>
        );

        const Download = () => (
            <div className="download" id="jsDownload">
                <ul>
                    <li>
                        <span className="headline">Docker</span>
                        <p>Docker manifest to pull the image for your target platform</p>
                        <pre>docker pull questdb/questdb</pre>
                    </li>
                    <li>
                        <span className="headline">Cross-platform binaries (requires JRE8)</span>
                        <p>Supported Platforms: Windows 64-bit, Linux 64-bit, OSX and ARM64</p>
                        <pre><a
                            href="https://github.com/questdb/questdb/releases/download/4.1.5/questdb-4.1.5-bin.tar.gz">https://github.com/questdb/questdb/releases/download/4.1.5/questdb-4.1.5-bin.tar.gz</a> (4Mb)</pre>
                    </li>
                    <li>
                        <span className="headline">Java library</span>
                        <p>Embedded Java database as Maven dependency</p>
                        <pre>{`
<dependency>
    <groupId>org.questdb</groupId>
    <artifactId>core</artifactId>
    <version>4.1.5</version>
</dependency>
                            `}
                        </pre>
                    </li>
                </ul>
            </div>
        );

        return (
            <div>
                <HomeSplash siteConfig={siteConfig} language={language}/>
                <div className="centeredContainer">
                <Title/>
                <GetStarted/>
                <GetStartedSubQuestion/>
                <GetStartedSubTuto/>
                <Download/>
                </div>
            </div>
        );
    }
}

module.exports = Index;
