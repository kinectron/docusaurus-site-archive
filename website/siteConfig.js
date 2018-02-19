/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/test-site/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Kinectron' /* title for your website */,
  tagline: 'A Realtime Kinect Server',
  url: 'kinectron.github.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  headerLinks: [
    {doc: 'server', label: 'Server'},
    {doc: 'api', label: 'API'},
    {page: 'examples', label: 'Examples'},
    {page: 'experiments', label: 'Experiments'},
    {blog: true, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  //headerIcon: 'img/docusaurus.svg',
  //footerIcon: 'img/docusaurus.svg',
  //favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#1daad8',
    secondaryColor: '#88d0e7',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Kinectron',
  organizationName: 'kinectron', // or set an env variable ORGANIZATION_NAME
  projectName: 'kinectron.github.io', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/kinectron/kinectron.github.io',
};

module.exports = siteConfig;
