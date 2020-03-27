/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
    docUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        const docsUrl = this.props.config.docsUrl;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        return `${baseUrl}${docsPart}${langPart}${doc}`;
    }

    docUrlDefault(doc) {
        const baseUrl = this.props.config.baseUrl;
        const docsUrl = this.props.config.docsUrl;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        return `${baseUrl}${docsPart}${doc}`;
    }

    render() {
        return (
            <footer className="nav-footer" id="footer">
                <section className="sitemap">
{/*                    <a href={this.props.config.baseUrl} className="nav-home">
                        {this.props.config.footerIcon && (
                            <img
                                src={this.props.config.baseUrl + this.props.config.footerIcon}
                                alt={this.props.config.title}
                                width="66"
                                height="58"
                            />
                        )}
                    </a>*/}
                    <div align={"left"} className="footersection">
                        <h5>QuestDB</h5>
                        <a href={this.docUrlDefault('documentationOverview')}>
                            Documentation
                        </a>
                        <a href={`/getstarted`}>
                            Download
                        </a>
                        <a href={this.docUrlDefault('roadmap')}>
                            Roadmap
                        </a>
                    </div>
                    <div align={"left"} className="footersection">
                        <h5>Community</h5>
                        {/*            <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a>*/}
                        <a href="https://stackoverflow.com/questions/tagged/"
                           target="_blank"
                           rel="noreferrer noopener">
                            Stack Overflow
                        </a>
                        <a href="https://join.slack.com/t/questdb/shared_invite/enQtNzk4Nzg4Mjc2MTE2LTEzZThjMzliMjUzMTBmYzVjYWNmM2UyNWJmNDdkMDYyZmE0ZDliZTQxN2EzNzk5MDE3Zjc1ZmJiZmFiZTIwMGY>"> Join
                            Slack </a>
                        <a
                            href="https://twitter.com/QuestDB"
                            target="_blank"
                            rel="noreferrer noopener">
                            Twitter
                        </a>
                    </div>
                    <div align={"left"} className="footersection">
                        <h5>More</h5>
                        <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
                        <a href="https://github.com/questdb/questdb/">GitHub</a>
                        <a
                            className="github-button"
                            href={this.props.config.repoUrl}
                            data-icon="octicon-star"
                            data-count-href="/questdb/questdb/stargazers"
                            data-show-count="true"
                            data-count-aria-label="# stargazers on GitHub"
                            aria-label="Star this project on GitHub">
                            Star
                        </a>
                        {this.props.config.twitterUsername && (
                            <div className="social">
                                <a
                                    href={`https://twitter.com/${this.props.config.twitterUsername}`}
                                    className="twitter-follow-button">
                                    Follow @{this.props.config.twitterUsername}
                                </a>
                            </div>
                        )}
                        {this.props.config.facebookAppId && (
                            <div className="social">
                                <div
                                    className="fb-like"
                                    data-href={this.props.config.url}
                                    data-colorscheme="dark"
                                    data-layout="standard"
                                    data-share="true"
                                    data-width="225"
                                    data-show-faces="false"
                                />
                            </div>
                        )}
                    </div>
                </section>

                <section className="copyright">{this.props.config.copyright}</section>
            </footer>
        );
    }
}

module.exports = Footer;
