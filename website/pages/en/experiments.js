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

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

class Experiments extends React.Component {
  render() {
    const supportLinks = [
      {
        content: 'Users create and fly a virtual bird from their own shadow puppets. Created by Tong Wu and Kai-che Hung.',
        image: imgUrl('experiments/flappy.png'),
        imageAlign: 'top',
        title: 'Flappy Shadow',
        imageLink: 'http://www.tongwu.io/2017/11/14/icm-final-flappy-shadow/',
      },
      {
        content: 'A series of visual and sonic compositions that reconfigure on live Kinectron input. Created by Katya Rozanova.',
        image: imgUrl('experiments/patternsound.png'),
        imageAlign: 'top',
        title: 'Pattern and Sound Series',
        imageLink: 'http://www.katyarozanova.com/blog-1/2017/11/7/pattern-and-sound-series',
      },
      {
        content: 'A project that disassociates the body as input from its body as output. Created by Stephanie Koltun.',
        image: imgUrl('experiments/thriller.png'),
        imageAlign: 'top',
        title: 'How Thrilling',
        imageLink: 'http://anotheridea.co/category/projects/how-thrilling/',
      },
      {
        content: 'An immersive future forest experience inspired by a Japanese rock garden. Created by Shawn Ma.',
        image: imgUrl('experiments/forest.png'),
        imageAlign: 'top',
        title: 'Future Forest Experience',
        imageLink: 'https://shawnmasite.wordpress.com/2018/01/07/the-future-forest-experience/',
      },

    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h2>Experiments</h2>
            </header>
            <div id="experiments-intro">
              <p>Kinectron is currently being used by a community of creative coders at NYU ITP. Here are some of the projects they've created.</p>
            </div>
            <GridBlock id="experimentsImg" contents={supportLinks} layout="twoColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Experiments;
