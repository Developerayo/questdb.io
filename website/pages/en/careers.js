/**
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
        const {baseUrl} = siteConfig;

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

        const Intro = () => (
            <div>
                <div className="careers-intro">
                    <span className="title colored bold">Careers</span>
                    <p>
                        Want to join an ambitious team whose mission to push the boundaries of database
                        performance? <b> We're hiring!</b> QuestDB is based in <b>London</b> and <b>San Francisco</b>,
                        and backed by leading venture capital funds.
                    </p>

                    <img className="careers-img" src='/img/team.svg'/>
                    <br/>
                </div>


                <div className="perks center">
                    <span className="jobtitle colored bold center">Perks</span>
                    <Block layout="twoColumn">
                        {[
                            {
                                content: '<span class="center">Flexible work schedule</span>',
                                image: `${baseUrl}img/flexible-time.svg`,
                                imageAlign: 'top'
                            },
                            {
                                content: '<span class="center">Equity participation</span>',
                                image: `${baseUrl}img/equity-comp.svg`,
                                imageAlign: 'top'
                            },
                            {
                                content: '<span class="center">Choose your equipment</span>',
                                image: `${baseUrl}img/laptop.svg`,
                                imageAlign: 'top'
                            },
                            {
                                content: '<span class="center">Onsite barista</span>',
                                image: `${baseUrl}img/barista.svg`,
                                imageAlign: 'top'
                            },
                        ]}
                    </Block>
                    <br/>
                    and more...
                    <ul className="buttons center white">
                        <li><a href="#job-list">
                            <b>Check out our open positions</b>
                        </a></li>
                    </ul>
                </div>
            </div>
        );

        const Apply = () => (
            <div className="apply">
                <div className="apply-text">
                    <span className="jobtitle colored bold">How to apply</span>
                    Send your CV to <b>careers at questdb.io</b> or
                    <a target="_blank"
                       href="https://join.slack.com/t/questdb/shared_invite/enQtNzk4Nzg4Mjc2MTE2LTEzZThjMzliMjUzMTBmYzVjYWNmM2UyNWJmNDdkMDYyZmE0ZDliZTQxN2EzNzk5MDE3Zjc1ZmJiZmFiZTIwMGY>"
                       className="color">
                        <b> chat to us on Slack! </b>
                    </a>
                    <br/><br/>
                    <span className="jobtitle colored bold">Our interview process</span>
                    <p>
                        We have designed our interview process to give you the maximum transparency about the way we
                        work together and our culture.

                        <ul className="apply-steps">
                            <li>Step 1 - Contact us!</li>
                            Send your CV by email to <b>careers at questdb.io</b> or
                            <a target="_blank"
                               href="https://join.slack.com/t/questdb/shared_invite/enQtNzk4Nzg4Mjc2MTE2LTEzZThjMzliMjUzMTBmYzVjYWNmM2UyNWJmNDdkMDYyZmE0ZDliZTQxN2EzNzk5MDE3Zjc1ZmJiZmFiZTIwMGY>"
                               className="color">
                                <b> chat to us on Slack.</b>
                            </a>
                            We will review your application and aim to come back to you within 3 days.
                            <br/><br/>
                            <li>Step 2 - Phone interview</li>
                            We will offer you the opportunity to showcase your skills. You can either show us something
                            you did (for engineers, this could be code you are proud of. For designers, it could be your
                            portfolio). Alternatively, we may send you a challenge to complete before your interview.
                            <br/><br/>
                            <li>Step 3 - Face-to-face or video interviews with founders</li>
                            We will schedule face-to-face interviews with all founders, either in our office or via
                            video conference.
                            <br/><br/>
                            <li>Step 4 - Spend a day with us</li>
                            We are aware that interviews only give you a superficial view of the company. We will
                            welcome you to join us for a day and see how we work. You will be assigned a buddy to guide
                            you throughout the day.
                            <br/><br/>
                            <li>Step 5 - Reference checks and job offer</li>
                            We will come up with an offer and iron out the details. We will also conduct some mandatory
                            background checks. As soon as these are out of the way, all you need to do is choose your
                            new computer and screen before getting started!
                        </ul>
                    </p>
                </div>
            </div>
        );

        const JobFooter = () => (
            <div className="careers-footer">
                <div>
                    <p>
                        Want to work with us but can't find a job description that matches your profile? <br/>
                        <ul className="buttons">
                            <li><a
                                target="_blank"
                                href="https://join.slack.com/t/questdb/shared_invite/enQtNzk4Nzg4Mjc2MTE2LTEzZThjMzliMjUzMTBmYzVjYWNmM2UyNWJmNDdkMDYyZmE0ZDliZTQxN2EzNzk5MDE3Zjc1ZmJiZmFiZTIwMGY>">
                                <b>Get in touch on Slack!</b>
                            </a></li>
                        </ul>
                        We'll figure something out.
                    </p>
                </div>
            </div>
        );

        const DevRel = () => (
            <div className="job" id="dev-rel-job">
                <span className="jobtitle colored bold">Head of developer relations</span>
                <p>
                    Helping developers achieve their goals is at the center of what we do. Your role will consist of
                    engaging with the user base and orchestrating the growth of our open source communities by reaching
                    out to developers and help them solve their problems.
                    <br/><br/>
                    This is an open-ended role with a substantial degree of autonomy. You will have full liberty to
                    develop outreach channels such as promoting content to spur adoption, planning events, marketing, PR
                    and social media initiatives, as well as any additional direction you will deem relevant.
                </p>

                <span className="jobsubtitle colored bold">Responsibilities</span>
                <ul>
                    <li>Understand and track developers needs: Create feedback loops with the developer community to
                        inform
                        product roadmap. Be the first point of contact for developers requests and questions.
                    </li>
                    <li>Manage and engage the community: Build engagement developers' social channels and grow our
                        Slack
                        community. Manage outreach to developers both online (Moderate day-to-day community activity in
                        the
                        discussion forums) and offline via conferences, events, workshops, etc.
                    </li>
                    <li>Create content: Work with the CTO and CPO to create technical articles and blog posts that bring
                        value to developers.
                    </li>
                    <li>Identify strategic partnership opportunities to grow our developer community.</li>
                </ul>

                <span className="jobsubtitle colored bold">Requirements</span>
                <ul>
                    <li>3+ years of experience in community development</li>
                    <li>Passionate about open source and the developer community</li>
                    <li>Database or Java knowledge preferred</li>
                    <li>Strong writing and communication skills</li>
                    <li>Marketing experience is a plus</li>
                    <li>Relationships in prominent Open Source communities is a plus</li>
                    <li>Familiarity with developer tools</li>
                    <li>Excellent spoken and written English</li>
                </ul>

                <span className="jobsubtitle colored bold">Remuneration</span>
                We see this role as foundational for the long-term success of the company. We offer a competitive
                salary and large equity stake to align your remuneration to the long-term success of the firm.

            </div>
        );

        const Dev = () => (
            <div className="job" id="dev-backend-job">
                <span className="jobtitle colored bold">Back-end engineer</span>
                <p>
                    QuestDB stands for speed and efficiency. As a key member of the dev team, you will put these
                    principles
                    in motion and contribute to the fastest database engine in the world.
                    <br/><br/>
                    This is not your standard dev job. QuestDB uses innovative coding techniques and strives for
                    performance. It will take some time to get up to speed (and we will help you along the way), but the
                    skills you will gain will be extremely rewarding.
                    <br/><br/>
                    Feel free to skim through our
                    <a className="bold color" target="_blank" href="https://github.com/questdb/questdb"> Github
                        repo </a>
                    to get an idea of what is expected. If you're up to the challenge, get in touch!
                </p>

                <span className="jobsubtitle colored bold">Responsibilities</span>
                <ul>
                    <li>Participate and take the lead of development efforts across the whole technology stack (storage
                        engine, SQL engine, interfaces).
                    </li>
                    <li>Propose, design and implement new functions and features. Propose ways to improve performance on
                        existing
                        modules.
                    </li>
                    <li>Ensure new features meet the standards of code quality, performance, and reliability.
                    </li>
                    <li>Actively engage with and assist customers to boost experience and adoption.</li>
                </ul>

                <span className="jobsubtitle colored bold">Requirements</span>
                <ul>
                    <li>3+ years of software engineering experience</li>
                    <li>Passionate about performance and code efficiency</li>
                    <li>Experience with databases and the JVM</li>
                    <li>Innovative and inquisitive spirit</li>
                    <li>Low-latency expertise is a plus</li>
                    <li>Strong affection for thoroughly tested code</li>
                </ul>

                <span className="jobsubtitle colored bold">Remuneration</span>
                Our tech and our development team are at the center of what we do.
                salary and large equity stake to align your remuneration to the long-term success of the firm.

            </div>
        );

        const TechWri = () => (
            <div className="job" id="dev-techwriter-job">
                <span className="jobtitle colored bold">Technical content writer / Developer education</span>
                <p>
                    Helping developers solve their problems is at the center of what we do. Your role will consist of
                    producing content for targeted open source communities to improve developers’ engagement with our
                    time-series database. This content will fuel developer’s usage of QuestDB and establish the brand in
                    the global developer community.
                    <br/><br/>
                    You do not have to be a database expert, but you should be able to carry through research while
                    liaising with software engineers and product managers to understand the technicalities of our
                    product and consequently write about it in an accurate and engaging way.
                </p>

                <span className="jobsubtitle colored bold">Responsibilities</span>
                <ul>
                    <li>Participate in forming and executing the content strategy at QuestDB by leading article creation
                        and publication.
                    </li>
                    <li>Research, write, edit and facilitate technical articles, blog posts, white papers and reports
                        through a variety of channels, including QuestDB’s blog and social media.
                    </li>
                    <li>
                        Work alongside the engineering and product team to absorb database related knowledge.
                    </li>
                    <li>Follow developer discussions, interactions and feedback on social media and our support channels
                        such as Slack or Stack Overflow. Leverage this intel to produce content that developers will
                        engage with and find useful.
                    </li>
                    <li>
                        Track time-series database and wider data/analytics related discussions on specialised forums
                        and channels (HN, Reddit, dZone, etc.) to discern and analyse the gaps in our content strategy.
                    </li>
                    <li>
                        Maintain internal database related knowledge base content and improve it on a regular basis.
                    </li>
                </ul>

                <span className="jobsubtitle colored bold">Requirements</span>
                <ul>
                    <li>2+ years of experience in technical content creation, preferably for an open source project</li>
                    <li>Passionate about open source and the developer community</li>
                    <li>Database and SQL knowledge required</li>
                    <li>Excellent spoken and written English</li>
                    <li>Content marketing knowledge preferred</li>
                </ul>

            </div>
        );

        const Openings = () => (
            <div className="job" id="job-list">
                <span className="jobtitle colored bold">Current openings</span>
                We are actively recruiting for the following positions:
                <br/><br/>
                <ul>
                    <li><a href="#dev-rel-job">Head of developer relations (London, San Francisco)</a></li>
                    <li><a href="#dev-backend-job">Back-end engineer (London)</a></li>
                    <li><a href="#dev-frontend-job">Front-end engineer (London)</a></li>
                    <li><a href="#dev-techwriter-job">Technical Writer (London, SF, remote)</a></li>
                </ul>
            </div>
        );

        return (
            <div>
                <HomeSplash siteConfig={siteConfig} language={language}/>
                <div className="mainContainer">
                    <Intro/>
                    <Apply/>
                    <Openings/>
                    <TechWri/>
                    <DevRel/>
                    <Dev/>
                    <JobFooter/>
                </div>
            </div>
        );
    }
}

module.exports = Index;
