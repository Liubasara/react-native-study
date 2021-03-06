export default function htmlTemplate (detailHtml) {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    </head>
    <body>
      ${detailHtml}
    </body>
    <script>
      document.addEventListener('message', function (e) {
        window.alert(e.data)
      })
    </script>
  </html>
  `
}
