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
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('intro.html', this.props.language)}>
              About
            </a>
            <a href={this.docUrl('server.html', this.props.language)}>
              Getting Started: Server
            </a>
            <a href={this.docUrl('api.html', this.props.language)}>
              Getting Started: API
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('experiments.html', this.props.language)}>
              User Showcase
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.baseUrl + 'blog'}>Blog</a>
            <a href="https://github.com/kinectron/kinectron">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.projectUrl}
              data-icon="octicon-star"
              data-count-href="/kinectron/kinectron/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://tisch.nyu.edu/itp"
          target="_blank"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/itp_logo.png'}
            alt="ITP Home Page"
            width="85"
            height="22"
          />
        </a>
        <section className="copyright">
          This project is currently maintained at <a href="https://tisch.nyu.edu/itp" target="_blank">NYU ITP</a>. 
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
