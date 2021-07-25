import { NextApiRequest, NextApiResponse } from "next";
import { getScreenshot } from "../../infra/getScreeshot";

const getHTML = ({ user, avatar, text }) => `
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background: linear-gradient(45deg, #ff8a00 0%, #e52e71 100%);
        font-family: "Roboto", sans-serif;
        color: #fff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      header {
        display: flex;
        width: 95%;
        height: 50vh;
        margin: 0 auto;
        align-items: center;
        justify-content: space-between;
      }

      img {
        height: 272px;
        width: 272px;
        border-radius: 50%;
        border: 16px solid #fff;
      }

      .user-box {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      .user-box__title {
        font-weight: bold;
        font-size: 72px;
        line-height: 84px;
        text-align: center;
      }

      .user-box__subtitle {
        font-weight: bold;
        font-size: 48px;
        line-height: 75px;
        text-align: center;
        margin-top: 10px;
      }

      main {
        display: flex;
        width: 95%;
        height: 50vh;
        margin: 0 auto;
        align-items: flex-start;
        justify-content: center;
      }

      main strong {
        margin-top: 40px;
        font-weight: bold;
        font-size: 96px;
        line-height: 112px;
        text-align: center;
      }

      .hashtag {
        position: fixed;
        bottom: 16px;
        left: 16px;
        font-size: 24px;
      }

      .site {
        position: fixed;
        bottom: 16px;
        right: 16px;
        font-size: 24px;
      }
    </style>
  </head>
  <body>
    <header>
      <img src="${avatar}" />
      <div class="user-box">
        <strong class="user-box__title">@${user}</strong>
        <p class="user-box__subtitle">foi cancelado por...</p>
      </div>
    </header>
    <main>
      <strong>${text}</strong>
    </main>
    <span class="hashtag">#FuiCancelado</span>
    <span class="site">https://fui-cancelado.vercel.app</span>
  </body>
</html>

`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const isHTMLDebugMode = false;
  const html = getHTML({
    user: req.query.user || "Alguma coisa deu errado",
    avatar: req.query.avatar || "Alguma coisa deu errado",
    text: req.query.text || "Alguma coisa deu errado",
  });

  if (isHTMLDebugMode) {
    res.setHeader("Content-Type", "text/html");
    return res.end(html);
  }

  const file = await getScreenshot(html);

  res.setHeader("Content-Type", "image/png");
  res.end(file);
};
