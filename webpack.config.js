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
        port: process.env.PORT || 8080,
        historyApiFallback: true,
   },
   module: {
      strictExportPresence: true,
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
            use: 'url-loader'
         },
         {
            test:/\.(scss|sass)$/i,
            use: ["style-loader", "css-loader", "sass-loader"]
         },
         {
            test: /\.(png|jpg|gif)$/i,
            use:[
               {
                  loader: 'url-loader',
                  options: {
                     limit: 10000,
                  },
               }
            ],
         },
      ],
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: './public/index.html'
       }),
   ]
};