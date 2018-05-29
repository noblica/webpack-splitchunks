# webpack-splitchunks
`SplitChunkPlugin` doesn't work for some reason.

Setup:
```
npm install

npm run serve
```

The webpack configuration follows this guide:
https://webpack.js.org/guides/code-splitting/

However, setting the:
```
optimization: {
  splitChunks: {
    chunks: 'all'
  }
}
```
as recommended, and importing the `layout.bundle.js` file in the `out/index.html`, breaks the code.
Removing the `optimization` object, in the webpack configuration, makes the code work, but doesn't split it.
