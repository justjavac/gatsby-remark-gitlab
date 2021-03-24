# gatsby-remark-gitlab

[![ci](https://github.com/justjavac/gatsby-remark-gitlab/actions/workflows/ci.yml/badge.svg)](https://github.com/justjavac/gatsby-remark-gitlab/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/gatsby-remark-gitlab.svg?style=flat-square)](https://www.npmjs.com/package/gatsby-remark-github)

This is a plugin for [`gatsby-transformer-remark`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark), which is in turn a plugin for [GatsbyJS](https://www.gatsbyjs.org/).
This plugin is a simple wrapper around the [`remark-gitlab`](https://github.com/justjavac/remark-gitlab), which replace links to GitLab files in Markdown files with the actual content of those files, wrapped in Markdown code blocks that can optionally be further processed by a syntax highlighter (e.g. [`gatsby-remark-prismjs`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs)).

## Installation

```bash
# npm:
npm install gatsby-remark-gitlab
# or yarn:
yarn add gatsby-remark-gitlab
```

## Usage:

If you haven't already installed [`gatsby-transformer-remark`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark), you should install it.
If you want to have syntax highlighting by PrismJS, install [`gatsby-remark-prismjs`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs) as well.

Then in your `gatsby-config.js`, add this plugin to the list of plugins for `gatsby-transformer-remark`, preferably as the first one but definitely before `gatsby-remark-prismjs`:

```javascript
module.exports = {
  // other configs ...
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-gitlab',
            options: {
              repository: 'user/project',
              mentionStrong: true,
            }
          },
          // ... other plugins ...
          'gatsby-remark-prismjs',
        ]
      }
    }
  ]
}
```

For sample input and output, please refer to the usage section of [`remark-gitlab`](https://github.com/justjavac/remark-gitlab#usage).

## License

[gatsby-remark-gitlab](https://github.com/justjavac/gatsby-remark-gitlab) is released under
the MIT License. See the bundled [LICENSE](./LICENSE) file for details.