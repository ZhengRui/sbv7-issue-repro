#### To reproduce (commit e80a3d0)

1. build the sdk

```bash
cd sdk
pnpm install
pnpm build
```

2. start the storybook

```bash
cd storybook
pnpm install
pnpm storybook
```

it will show the following errors:

```plain
TypeError: Cannot read properties of null (reading 'useEffect')
    at useEffect (http://localhost:6006/vendors-sdk_node_modules_pnpm_react_18_2_0_node_modules_react_index_js-node_modules_pnpm_reac-415da3.iframe.bundle.js:1644:21)
    at o (http://localhost:6006/ExampleSDKComponent-stories.iframe.bundle.js:17:66)
    at renderWithHooks (http://localhost:6006/vendors-node_modules_pnpm_storybook_addon-essentials_7_0_12_react-dom_18_2_0_react_18_2_0_nod-70b296.iframe.bundle.js:41173:18)
    at mountIndeterminateComponent (http://localhost:6006/vendors-node_modules_pnpm_storybook_addon-essentials_7_0_12_react-dom_18_2_0_react_18_2_0_nod-70b296.iframe.bundle.js:44937:13)
    at beginWork (http://localhost:6006/vendors-node_modules_pnpm_storybook_addon-essentials_7_0_12_react-dom_18_2_0_react_18_2_0_nod-70b296.iframe.bundle.js:46450:16)
    at beginWork$1 (http://localhost:6006/vendors-node_modules_pnpm_storybook_addon-essentials_7_0_12_react-dom_18_2_0_react_18_2_0_nod-70b296.iframe.bundle.js:52289:14)
    at performUnitOfWork (http://localhost:6006/vendors-node_modules_pnpm_storybook_addon-essentials_7_0_12_react-dom_18_2_0_react_18_2_0_nod-70b296.iframe.bundle.js:51420:12)
    at workLoopSync (http://localhost:6006/vendors-node_modules_pnpm_storybook_addon-essentials_7_0_12_react-dom_18_2_0_react_18_2_0_nod-70b296.iframe.bundle.js:51329:5)
    at renderRootSync (http://localhost:6006/vendors-node_modules_pnpm_storybook_addon-essentials_7_0_12_react-dom_18_2_0_react_18_2_0_nod-70b296.iframe.bundle.js:51297:7)
    at recoverFromConcurrentError (http://localhost:6006/vendors-node_modules_pnpm_storybook_addon-essentials_7_0_12_react-dom_18_2_0_react_18_2_0_nod-70b296.iframe.bundle.js:50713:20)
```

#### To fix (commit c3b7457)

```bash
cd sdk
pnpm remove react react-dom
pnpm link ../storybook/node_modules/react
```

*Note: the fix brings the question when developing the lib, how you know which app's react it should link to. This link hack seems only relate to storybook v7, for other apps that uses the lib e.g. nextapp, it doesn't matter whether/where to link react in the lib.*
