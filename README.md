# webpack-config
A ready to use (webpack based) project setup

# How to use:
- Pull repository.
- Install the packages just by typing "npm install" in your terminal.
- After installing the packages, the setup is ready, just follow the "Guide" section.

## GUIDE:
The configuration is setup for **Development mode** and **Production mode**. <br />
**Development Mode:** Will open a live server. To start dev mode, simply go to terminal -> project folder and type "npm start" press enter.<br />
**Production Mode:** Will produce a CSS HTML and JS file in "dist" folder, which is minified and ready to deploy. In terminal type "npm run build" to use production mode.

## What This Setup Is Capable Of:
- It will use **babel** to compile javascript.
- It is ready to use **SASS** or **SCSS**.
- It will use autoprefixer for css (which was compiled from **SCSS** or **SASS**). 
- It will minify **HTML**, **CSS** and **Javascript**. 

## EXTRA CONFIGURATION:
###### For **CSS** (if **SASS** is not needed): 
1. Delete "node-sass"
2. Install "optimize-css-assets-webpack-plugin".
3. Open file "webpack.prod.js" and import "optimize-css-assets-webpack-plugin" and "terser-webpack-plugin" <br />
```
//which should look like:
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
```
4. Then in "module.exports = {...}" add following code:
```
optimization: {
  minimizer: [new TerserWebpackPlugin({}), new OptimizeCssAssetsPlugin({})]
}
```
5. In module: { rules: [...] } replace the object which has property of "test: /\.s[ac]ss$/i," with this object:
```
{
  test: /\.css$/i,
  exclude: /(node_modules)/,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    "postcss-loader"
  ]
},
```
