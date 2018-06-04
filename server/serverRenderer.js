import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from '../shared/root';
import { getStore } from '../shared/store';
import Loadable from 'react-loadable';
import stats from '../public/react-loadable.json';
import { getBundles } from 'react-loadable/webpack';


function renderHTML(html, preloadedState, bundles) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link href="/style.css" rel="stylesheet" type="text/css">
        </head>
        <body>
          <div id="root" class="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/manifest.js"></script>
            ${bundles.map(bundle => {
            return `<script src="/${bundle.file}"></script>`
          }).join('\n')}
          <script src="/bundle.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = getStore();
    // This context object contains the results of the render
    const context = {};
    let modules = [];

    const root = (
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <Root
          context={context}
          location={req.url}
          Router={StaticRouter}
          store={store}
          />
      </Loadable.Capture>
    );

    renderToString(root);

    let bundles = getBundles(stats, modules);

    // context.url will contain the URL to redirect to if a <Redirect> was used
    store.runSaga().done.then(() => {
      const htmlString = renderToString(root);

      // context.url will contain the URL to redirect to if a <Redirect> was used
      if (context.url) {
        res.writeHead(302, {
          Location: context.url,
        });
        res.end();
        return;
      }

      const preloadedState = store.getState();

      res.send(renderHTML(htmlString, preloadedState, bundles));
    });

    // When the first render is finished, send the END action to redux-saga.
    store.close();
  };
}
