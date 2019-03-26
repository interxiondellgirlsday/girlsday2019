var md = require('markdown-it')();

module.exports = {
  generatePage: function(pageContent, pageMeta = defaultMeta) {
    return`<!DOCTYPE html>
<html lang="${pageMeta.lang || this.defaultMeta.lang}">
  <head>
    <title>${pageMeta.title || this.defaultMeta.title}</title>
    <meta charset="${pageMeta.charset || this.defaultMeta.charset}">
    <metaname="description" content="${pageMeta.description || this.defaultMeta.description}>"
    <meta name="keywords" content="${pageMeta.keywords || this.defaultMeta.keywords}">
    <meta name="author" content="${pageMeta.author || this.defaultMeta.author}">
    ${
      pageMeta.hasOwnProperty('extra')
        ?pageMeta.extra.length
          ? pageMeta.extra.map(value => `<meta ${value}>`)
          : ''
        :''
    }
    <meta name="description" content="${pageMeta.description || this.defaultMeta.description}">
    ${
      pageMeta.hasOwnProperty('stylesheets')
        ?pageMeta.stylesheets.length
          ?pageMeta.stylesheets.map(value => `<link rel="stylesheet" href="${value}">`)
          :''
        :this.defaultMeta.stylesheets.map(value => `<link rel="stylesheet" href="${value}">`)
    }
    ${
      pageMeta.hasOwnProperty('scripts')
        ?pageMeta.scripts.length
          ?pageMeta.scripts.map(value => `<script src="${value}"></script>`)
          :''
        :this.defaultMeta.scripts.map(value => `<script src="${value}"></script>`)
    }
    <link rel="icon" type="image/png" href="${pageMeta.favicon || this.defaultMeta.favicon}">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  </head>
  <body>
    <div class="jumbotron">
      <h1>Interxion Dell Girlsday 2019</h1>
    </div>
    <div class="container">
      ${md.render(pageContent)}
    </div>
  </body>
</html>
`;
  },
  defaultMeta: {
    lang: 'nl',
    title: 'Interxion Dell Girlsday 2019',
    stylesheets: ['./css/style.css'],
    scripts: ['./js/main.js'],
    charset: 'utf-8',
    description: 'Interxion Dell Girlsday 2019',
    keywords: 'interxion, dell, girlsday',
    author: 'None',
    favicon: './images/favicon.ico',
    viewport: 'width=device-width, initial-scale=1',
    extra: []
  }
}
