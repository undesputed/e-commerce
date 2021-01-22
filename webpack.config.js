const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './src/index.tsx',
   mode: "development",
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
   },
   resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
   devServer: {
        inline: true,
        port: 8080
   },
   module: {
      rules: [
         {
            test: /\.(ts|tsx)$/,
            loader: "awesome-typescript-loader",
         },
          {
            test: /\.(js|jsx)$/,
            loader: "babel-loader"
          },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         },
         {
            test:/\.(scss|sass)$/i,
            use: ["style-loader", "css-loader", "sass-loader"]
         },
      ],
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: './public/index.html'
       }),
   ]
};