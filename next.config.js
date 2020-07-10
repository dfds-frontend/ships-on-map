// https://nextjs.org/docs/#custom-configuration

const path = require('path')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const withPlugins = require('next-compose-plugins')
const withTranspileModules = require('next-transpile-modules')([

])
const withBundleAnalyzer = require('./withBundleAnalyzer')

let env
switch (process.env.NODE_ENV) {
  case 'production':
    env = 'PROD'
    break
  case 'staging':
    env = 'STAGING'
    break
  case 'development':
    env = 'DEV'
    break
  default:
    env = 'DEV'
    break
}

const nextConfig = {
  target: 'serverless',
  /**
   * If some of the envs are public, like a google maps key, but you still
   * want to keep them secret from the repo, the following code will allow you
   * to share some variables with the client, configured at compile time.
   */
  env: {
    ENV: env,
    // Public token, not a secret
    mapBoxToken:
      "pk.eyJ1Ijoia3VudWtuIiwiYSI6ImNrMHh2ZWFqazA0NWIzbXA0MnZxZXUxNmgifQ.M1ilooWxj_UOk41ZoAXTtg",
  },
};

module.exports = withPlugins(
  [
    [
      withTranspileModules,
      {
        webpack(config, options) {
          process.env.BUNDLE_ANALYZE &&
            config.plugins.push(new BundleAnalyzerPlugin())

          // Fixes npm packages that depend on `fs` module
          config.node = {
            fs: 'empty',
          }

          config.module.rules.push({
            test: /\.test.js$/,
            loader: 'ignore-loader',
          })

          config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          })

          config.module.rules.push({
            test: /\.(eot|woff|woff2)$/,
            loader: 'ignore-loader',
          })

          const usePolyfill = true
          if (usePolyfill) {
            // https://stackoverflow.com/a/53311389/815507
            // https://github.com/zeit/next.js/issues/2060#issuecomment-385199026
            const originalEntry = config.entry
            config.entry = async () => {
              const entries = await originalEntry()

              return entries
            }
          }

          return config
        },
      },
    ],

    [nextConfig],

    process.env.BUNDLE_ANALYZE && [
      // https://github.com/zeit/next-plugins/tree/master/packages/next-bundle-analyzer
      withBundleAnalyzer,

    ],
  ].filter(Boolean)
)
