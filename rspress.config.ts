import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import ghPages from 'rspress-plugin-gh-pages';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'My Site',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
  plugins:[
    ghPages({
        repo:'git@github.com:Liangdi/aicode-learning.git',
        branch:'gh-pages',
        siteBase:'/'
    })
  ]
});
