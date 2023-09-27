"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[4520],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./storybook/stories/docs/components/contributing.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return contributing}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),CONTRIBUTINGraw_namespaceObject="# Contributing\n\nThank you for taking the time to contribute.\n\nThe following is a set of guidelines for contributing to the `@wordpress/components` package to be considered in addition to the general ones described in our [Contributing Policy](/CONTRIBUTING.md).\n\nThis set of guidelines should apply especially to newly introduced components. In fact, while these guidelines should also be retroactively applied to existing components, it is sometimes impossible to do so for legacy/compatibility reasons.\n\nFor an example of a component that follows these requirements, take a look at [`ItemGroup`](/packages/components/src/item-group).\n- [Introducing new components](#introducing-new-components)\n- [Compatibility](#compatibility)\n- [Compound components](#compound-components)\n- [Components & Hooks](#components--hooks)\n- [TypeScript](#typescript)\n- [Styling](#styling)\n- [Context system](#context-system)\n- [Unit tests](#unit-tests)\n- [Storybook](#storybook)\n- [Documentation](#documentation)\n- [README example](#README-example)\n- [Folder structure](#folder-structure)\n- [TypeScript migration guide](#refactoring-a-component-to-typescript)\n- [Using Radix UI primitives](#using-radix-ui-primitives)\n\n## Introducing new components\n\n### Does it belong in the component library?\n\nA component library should include components that are generic and flexible enough to work across a variety of products. It should include what’s shared across many products and omit what’s not.\n\nTo determine if a component should be added, ask yourself:\n\n-   Could this component be used by other products/plugins?\n-   Does the new component overlap (in functionality or visual design) with any existing components?\n-   How much effort will be required to make and maintain?\n-   Is there a clear purpose for the component?\n\nHere’s a flowchart that can help determine if a new component is necessary:\n\n[![New component flowchart](https://wordpress.org/gutenberg/files/2019/07/New_component_flowchart.png)](https://coggle.it/diagram/WtUSrld3uAYZHsn-/t/new-ui-component/992b38cbe685d897b4aec6d0dd93cc4b47c06e0d4484eeb0d7d9a47fb2c48d94)\n\n### First steps\n\nIf you have a component you'd like added or changed, start by opening a GitHub issue. Include a detailed description in which you:\n\n-   Explain the rationale\n-   Detail the intended behavior\n-   Clarify whether it’s a variation of an existing component, or a new asset\n-   Include mockups of any fidelity (optional)\n-   Include any inspirations from other products (optional)\n\nThis issue will be used to discuss the proposed changes and track progress. Reviewers start by discussing the proposal to determine if it's appropriate for WordPress Components, or if there's overlap with an existing component.\n\nIt’s encouraged to surface works-in-progress. If you’re not able to complete all of the parts yourself, someone in the community may be able to pick up where you left off.\n\n### Next steps\n\nOnce the team has discussed and approved the change, it's time to start implementing it.\n\n1. **Provide a rationale**: Explain how your component will add value to the system and the greater product ecosystem. Be sure to include any user experience and interaction descriptions.\n2. **Draft documentation**: New components need development, design, and accessibility guidelines. Additionally, if your change adds additional behavior or expands a component’s features, those changes will need to be fully documented as well. Read through existing component documentation for examples. Start with a rough draft, and reviewers will help polish documentation.\n3. **Provide working code**: The component or enhancement must be built in React. See the [developer contribution guidelines](https://github.com/WordPress/gutenberg/blob/HEAD/docs/contributors/code/README.md).\n4. **Create a design spec**: Create sizing and styling annotations for all aspects of the component. This spec should provide a developer with everything they need to create the design in code. [Figma automatically does this for you](https://help.figma.com/article/32-developer-handoff).\n\nRemember, it’s unlikely that all parts will be done by one person. Contribute where you can, and others will help.\n\n### Component refinement\n\nBefore a component is published it will need to be fine-tuned:\n\n1. **Expand** the features of the component to a minimum. Agree on what features should be included.\n2. **Reduce** scope and leave off features lacking consensus.\n3. **Quality assurance**: each contribution must adhere to system standards.\n\n#### Quality assurance\n\nTo ensure quality, each component should be tested. The testing process should be done during the development of the component and before the component is published.\n\n-   **Accessibility**: Has the design and implementation accounted for accessibility? Please use the [WordPress accessibility guidelines](https://make.wordpress.org/accessibility/handbook/best-practices/). You must use the \"Needs Accessibility Feedback\" label and get a review from the accessibility team. It's best to request a review early (at the documentation stage) in order to ensure the component is designed inclusively from the outset.\n-   **Visual quality**: Does the component apply visual style — color, typography, icons, space, borders, and more — using appropriate variables, and does it follow [visual guidelines](https://make.wordpress.org/design/handbook/design-guide/)? You must use the \"Needs Design Feedback\" label and get a review from the design team.\n-   **Documentation**: Ensure that the component has proper documentation for development, design, and accessibility.\n-   **Sufficient states & variations**: Does it cover all the necessary variations (primary, secondary, dense, etc.) and states (default, hover, active, disabled, loading, etc.), within the intended scope?\n-   **Functionality**: Do all behaviors function as expected?\n-   **Responsiveness**: Does it incorporate responsive behaviors as needed? Is the component designed from a mobile-first perspective? Do all touch interactions work as expected?\n-   **Content resilience**: Is each dynamic word or image element resilient to too much, too little, and no content at all, respectively? How long can labels be, and what happens when you run out of space?\n-   **Composability**: Does it fit well when placed next to or layered with other components to form a larger composition?\n-   **Browser support**: Has the component visual quality and accuracy been checked across Safari, Chrome, Firefox, IE, etc? Please adhere to our [browser support requirements](https://github.com/WordPress/gutenberg/blob/HEAD/packages/browserslist-config/index.js).\n\n## Compatibility\n\nThe `@wordpress/components` package includes components that are relied upon by many developers across different projects. It is, therefore, very important to avoid introducing breaking changes.\n\nIn these situations, one possible approach is to \"soft-deprecate\" a given legacy API. This is achieved by:\n\n1. Removing traces of the API from the docs, while still supporting it in code.\n2. Updating all places in Gutenberg that use that API.\n3. Adding deprecation warnings (only after the previous point is completed, otherwise the Browser Console will be polluted by all those warnings and some e2e tests may fail).\n\nWhen adding new components or new props to existing components, it's recommended to prefix them with `__unstable` or `__experimental` until they're stable enough to be exposed as part of the public API.\n\n### Learn more\n\n- [How to preserve backward compatibility for a React Component](/docs/contributors/code/backward-compatibility.md#how-to-preserve-backward-compatibility-for-a-react-component)\n- [Experimental and Unstable APIs](/docs/contributors/code/coding-guidelines.md#experimental-and-unstable-apis)\n- [Deprecating styles](#deprecating-styles)\n\n\x3c!-- ## Polymorphic Components (i.e. the `as` prop)\n\nThe primary way to compose components is through the `as` prop. This prop can be used to change the underlying element used to render a component, e.g.:\n\n```tsx\nfunction LinkButton( { href, children } ) {\n\treturn <Button variant=\"primary\" as=\"a\" href={href}>{ children }</Button>;\n}\n```\n--\x3e\n\n## Compound components\n\nWhen creating components that render a list of subcomponents, prefer to expose the API using the [Compound Components](https://kentcdodds.com/blog/compound-components-with-react-hooks) technique over array props like `items` or `options`:\n\n```jsx\n// ❌ Don't:\n<List\n\titems={ [\n\t\t{ value: 'Item 1' },\n\t\t{ value: 'Item 2' },\n\t\t{ value: 'Item 3' },\n\t] }\n/>\n```\n\n```jsx\n// ✅ Do:\n<List>\n\t<ListItem value=\"Item 1\" />\n\t<ListItem value=\"Item 2\" />\n\t<ListItem value=\"Item 3\" />\n</List>\n```\n\nWhen implementing this pattern, avoid using `React.Children.map` and `React.cloneElement` to map through the children and augment them. Instead, use React Context to provide state to subcomponents and connect them:\n\n```jsx\n// ❌ Don't:\nfunction List ( props ) {\n\tconst [ state, setState ] = useState();\n\treturn (\n\t\t<div { ...props }>\n\t\t\t{ Children.map( props.children, ( child ) => cloneElement( child, { state } ) ) ) }\n\t\t</div>\n\t);\n}\n```\n\n```jsx\n// ✅ Do:\nconst ListContext = createContext();\n\nfunction List( props ) {\n\tconst [ state, setState ] = useState();\n\treturn (\n\t\t<ListContext.Provider value={ state }>\n\t\t\t<div { ...props } />\n\t\t</ListContext.Provider>\n\t);\n}\n\nfunction ListItem( props ) {\n\tconst state = useContext( ListContext );\n\t...\n}\n```\n\n\x3c!-- ## (Semi-)Controlled components\n\nTBD\n\n## Layout \"responsibilities\"\n\nTBD — Components' layout responsibilities and boundaries (i.e., a component should only affect the layout of its children, not its own) --\x3e\n\n## Components & Hooks\n\nOne way to enable reusability and composition is to extract a component's underlying logic into a hook (living in a separate `hook.ts` file). The actual component (usually defined in a `component.tsx` file) can then invoke the hook and use its output to render the required DOM elements. For example:\n\n```tsx\n// in `hook.ts`\nfunction useExampleComponent( props: PolymorphicComponentProps< ExampleProps, 'div' > ) {\n\t// Merge received props with the context system.\n\tconst { isVisible, className, ...otherProps } = useContextSystem( props, 'Example' );\n\n\t// Any other reusable rendering logic (e.g. computing className, state, event listeners...)\n\tconst cx = useCx();\n\tconst classes = useMemo(\n\t\t() =>\n\t\t\tcx(\n\t\t\t\tstyles.example,\n\t\t\t\tisVisible && styles.visible,\n\t\t\t\tclassName\n\t\t\t),\n\t\t[ className, isVisible ]\n\t);\n\n\treturn {\n\t\t...otherProps,\n\t\tclassName: classes\n\t};\n}\n\n// in `component.tsx`\nfunction Example(\n\tprops: PolymorphicComponentProps< ExampleProps, 'div' >,\n\tforwardedRef: React.ForwardedRef< any >\n) {\n\tconst exampleProps = useExampleComponent( props );\n\n\treturn <View { ...spacerProps } ref={ forwardedRef } />;\n}\n```\n\nA couple of good examples of how hooks are used for composition are:\n\n- the `Card` component, which builds on top of the `Surface` component by [calling the `useSurface` hook inside its own hook](/packages/components/src/card/card/hook.ts);\n- the `HStack` component, which builds on top of the `Flex` component and [calls the `useFlex` hook inside its own hook](/packages/components/src/h-stack/hook.tsx).\n\n\x3c!-- ## API Consinstency\n\n[To be expanded] E.g.:\n\n- Boolean component props should be prefixed with `is*` (e.g. `isChecked`), `has*` (e.g. `hasValue`) or `enable*` (e.g. `enableScroll`)\n- Event callback props should be prefixed with `on*` (e.g. `onChanged`)\n- Subcomponents naming conventions (e.g `CardBody` instead of `Card.Body`)\n- ...\n\n## Performance\n\nTDB --\x3e\n\n## TypeScript\n\nWe strongly encourage using TypeScript for all new components. Components should be typed using the `WordPressComponent` type.\n\n\x3c!-- TODO: add to the previous paragraph once the composision section gets added to this document.\n(more details about polymorphism can be found above in the \"Components composition\" section). --\x3e\n\n## Styling\n\nAll new component should be styled using [Emotion](https://emotion.sh/docs/introduction).\n\nNote: Instead of using Emotion's standard `cx` function, the custom [`useCx` hook](/packages/components/src/utils/hooks/use-cx.ts) should be used instead.\n\n### Deprecating styles\n\nChanging the styles of a non-experimental component must be done with care. To prevent serious breakage in third-party usage, in some cases we may want a grace period before fully removing the old styles. This can be done by temporarily placing the new styles behind a feature flag prop prefixed by `__next`, accompanied by a `deprecate()` warning in the console. The feature flag should be opt-in (false by default), and have a reasonably descriptive name (**not** `__nextHasNewStyles`). A descriptive name allows for multiple deprecations to proceed in parallel, separated by concerns or by deprecation version.\n\n```jsx\n// component.tsx\nimport deprecated from '@wordpress/deprecated';\nimport { Wrapper } from './styles.ts';\n\nfunction MyComponent({ __nextHasNoOuterMargins = false }) {\n\tif ( ! __nextHasNoOuterMargins ) {\n\t\tdeprecated( 'Outer margin styles for wp.components.MyComponent', {\n\t\t\tsince: '6.0',\n\t\t\tversion: '6.2', // Set a reasonable grace period depending on impact\n\t\t\thint:\n\t\t\t\t'Set the `__nextHasNoOuterMargins` prop to true to start opting into the new styles, which will become the default in a future version.',\n\t\t} );\n\t}\n\treturn <Wrapper __nextHasNoOuterMargins={__nextHasNoOuterMargins} />\n}\n```\n\nStyles should be structured so the deprecated styles are cleanly encapsulated, and can be easily removed when the deprecation version arrives.\n\n```js\n// styles.ts\nconst deprecatedMargins = ({ __nextHasNoOuterMargins }) => {\n\tif ( ! __nextHasNoOuterMargins ) {\n\t\treturn css`\n\t\t\tmargin: 8px;\n\t\t`;\n\t}\n};\n\nexport const Wrapper = styled.div`\n\tmargin: 0;\n\n\t${deprecatedMargins}\n`;\n```\n\nOnce deprecated, code examples in docs/stories should include the opt-in prop set to `true` so that new consumers are encouraged to adopt it from the start.\n\nRemember to [add a **Needs Dev Note** label](/docs/contributors/code/backward-compatibility.md##dev-notes) to the pull request so third-party developers can be informed of the deprecation.\n\nWhen the grace period is over and the deprecation version arrives, the `__next*` prop, deprecation notice, and deprecated styles should all be completely removed from the codebase.\n\n#### Criteria for putting styles changes behind a feature flag\n\nNot all style changes justify a formal deprecation process. The main thing to look for is whether the changes could cause layouts to break in an obvious or harmful way, given that the component is being used in a standard fashion.\n\n##### DOES need formal deprecation\n\n- Removing an outer margin.\n- Substantial changes to width/height, such as adding or removing a size restriction.\n\n##### DOES NOT need formal deprecation\n\n- Breakage only occurs in non-standard usage, such as when the consumer is overriding component internals.\n- Minor layout shifts of a few pixels.\n- Internal layout changes of a higher-level component.\n\n## Context system\n\nThe `@wordpress/components` context system is based on [React's `Context` API](https://reactjs.org/docs/context.html), and is a way for components to adapt to the \"context\" they're being rendered in.\n\nComponents can use this system via a couple of functions:\n\n- they can provide values using a shared `ContextSystemProvider` component\n- they can connect to the Context via `contextConnect`\n- they can read the \"computed\" values from the context via `useContextSystem`\n\nAn example of how this is used can be found in the [`Card` component family](/packages/components/src/card). For example, this is how the `Card` component injects the `size` and `isBorderless` props down to its `CardBody` subcomponent — which makes it use the correct spacing and border settings \"auto-magically\".\n\n```jsx\n//=========================================================================\n// Simplified snippet from `packages/components/src/card/card/hook.ts`\n//=========================================================================\nimport { useContextSystem } from '../../ui/context';\n\nexport function useCard( props ) {\n\t// Read any derived registered prop from the Context System in the `Card` namespace\n\tconst derivedProps = useContextSystem( props, 'Card' );\n\n\t// [...]\n\n\treturn computedHookProps;\n}\n\n//=========================================================================\n// Simplified snippet from `packages/components/src/card/card/component.ts`\n//=========================================================================\nimport { contextConnect, ContextSystemProvider } from '../../ui/context';\n\nfunction Card( props, forwardedRef ) {\n\tconst {\n\t\tsize,\n\t\tisBorderless,\n\t\t...otherComputedHookProps\n\t} = useCard( props );\n\n\t// [...]\n\n\t// Prepare the additional props that should be passed to subcomponents via the Context System.\n\tconst contextProviderValue = useMemo( () => {\n\t\treturn {\n\t\t\t// Each key in this object should match a component's registered namespace.\n\t\t\tCardBody: {\n\t\t\t\tsize,\n\t\t\t\tisBorderless,\n\t\t\t},\n\t\t};\n\t}, [ isBorderless, size ] );\n\n\treturn (\n\t\t/* Write additional values to the Context System */\n\t\t<ContextSystemProvider value={ contextProviderValue }>\n\t\t\t{ /* [...] */ }\n\t\t</ContextSystemProvider>\n\t);\n}\n\n// Connect to the Context System under the `Card` namespace\nconst ConnectedCard = contextConnect( Card, 'Card' );\nexport default ConnectedCard;\n\n//=========================================================================\n// Simplified snippet from `packages/components/src/card/card-body/hook.ts`\n//=========================================================================\nimport { useContextSystem } from '../../ui/context';\n\nexport function useCardBody( props ) {\n\t// Read any derived registered prop from the Context System in the `CardBody` namespace.\n\t// If a `CardBody` component is rendered as a child of a `Card` component, the value of\n\t// the `size` prop will be the one set by the parent `Card` component via the Context\n\t// System (unless the prop gets explicitely set on the `CardBody` component).\n\tconst { size = 'medium', ...otherDerivedProps } = useContextSystem( props, 'CardBody' );\n\n\t// [...]\n\n\treturn computedHookProps;\n}\n```\n\n## Unit tests\n\nPlease refer to the [JavaScript Testing Overview docs](/docs/contributors/code/testing-overview.md#snapshot-testing).\n\n## Storybook\n\nAll new components should add stories to the project's [Storybook](https://storybook.js.org/). Each [story](https://storybook.js.org/docs/react/get-started/whats-a-story) captures the rendered state of a UI component in isolation. This greatly simplifies working on a given component, while also serving as an interactive form of documentation.\n\nA component's story should be showcasing its different states — for example, the different variants of a  `Button`:\n\n```jsx\nimport Button from '../';\n\nexport default { title: 'Components/Button', component: Button };\n\nconst Template = ( args ) => <Button { ...args } />;\n\nexport const Default = Template.bind( {} );\nDefault.args = {\n\ttext: 'Default Button',\n\tisBusy: false,\n\tisSmall: false,\n};\n\nexport const Primary = Template.bind( {} );\nPrimary.args = {\n\t...Default.args,\n\ttext: 'Primary Button',\n\tvariant: 'primary',\n};\n```\n\nA great tool to use when writing stories is the [Storybook Controls addon](https://storybook.js.org/addons/@storybook/addon-controls). Ideally props should be exposed by using this addon, which provides a graphical UI to interact dynamically with the component without needing to write code. Historically, we used [Knobs](https://storybook.js.org/addons/@storybook/addon-knobs), but it was deprecated and later removed in [#47152](https://github.com/WordPress/gutenberg/pull/47152).\n\nThe default value of each control should coincide with the default value of the props (i.e. it should be `undefined` if a prop is not required). A story should, therefore, also explicitly show how values from the Context System are applied to (sub)components. A good example of how this may look like is the [`Card` story](https://wordpress.github.io/gutenberg/?path=/story/components-card--default) (code [here](/packages/components/src/card/stories/index.tsx)).\n\nStorybook can be started on a local machine by running `npm run storybook:dev`. Alternatively, the components' catalogue (up to date with the latest code on `trunk`) can be found at [wordpress.github.io/gutenberg/](https://wordpress.github.io/gutenberg/).\n\n## Documentation\n\nAll components, in addition to being typed, should be using JSDoc when necessary — as explained in the [Coding Guidelines](/docs/contributors/code/coding-guidelines.md#javascript-documentation-using-jsdoc).\n\nEach component that is exported from the `@wordpress/components` package should include a `README.md` file, explaining how to use the component, showing examples, and documenting all the props.\n\n## README example\n\n````markdown\n# `ComponentName`\n\n\x3c!-- If component is experimental, add the following section: --\x3e\n<div class=\"callout callout-alert\">\nThis feature is still experimental. “Experimental” means this is an early implementation subject to drastic and breaking changes.\n</div>\n\n\x3c!-- If component is deprecated, add the following section: --\x3e\n<div class=\"callout callout-alert\">\nThis component is deprecated. Please use `{other component}` from the `{other package}` package instead.\n</div>\n\nDescription of the component.\n\n## Usage\n\nCode example using correct markdown syntax and formatted using project's formatting rules. See [ItemGroup](/packages/components/src/item-group/item-group/README.md#usage) for a real-world example.\n\n```jsx\nimport { ExampleComponent } from '@wordpress/components';\n\nfunction Example() {\n\treturn (\n\t\t<ExampleComponent>\n\t\t\t<p>Code is poetry</p>\n\t\t</ExampleComponent>\n\t);\n}\n```\n\n## Props\n\nThe component accepts the following props:\n\n### `propName`: Typescript style type i.e `string`, `number`, `( nextValue: string ) => void`\n\nProp description. With a new line before and after the description and before and after type/required blocks.\n\n-   Required: Either `Yes` or `No`\n\x3c!-- If the prop has a default value, add the following line: --\x3e\n-   Default: [default value]\n\n### Inherited props\n\nAdd this section when there are props that are drilled down into an internal component. See [ClipboardButton](/packages/components/src/clipboard-button/README.md) for an example.\n\n\x3c!-- Only add the next section if the component relies on the [Context System](#context-system) --\x3e\n## Context\n\nSee examples for this section for the [ItemGroup](/packages/components/src/item-group/item-group/README.md#context) and [`Card`](/packages/components/src/card/card/README.md#context) components.\n````\n\n## Folder structure\n\nAs a result of the above guidelines, all new components (except for shared utilities) should _generally_ follow this folder structure:\n\n```text\ncomponent-name/\n├── stories\n│   └── index.js\n├── test\n│   └── index.js\n├── component.tsx\n├── context.ts\n├── hook.ts\n├── index.ts\n├── README.md\n├── styles.ts\n└── types.ts\n```\n\nIn case of a family of components (e.g. `Card` and `CardBody`, `CardFooter`, `CardHeader` ...), each component's implementation should live in a separate subfolder, while code common to the whole family of components (e.g types, utils, context...) should live in the family of components root folder:\n\n```text\ncomponent-family-name/\n├── sub-component-name/\n│   ├── index.ts\n│   ├── component.tsx\n│   ├── hook.ts\n│   ├── README.md\n│   └── styles.ts\n├── sub-component-name/\n│   ├── index.ts\n│   ├── component.tsx\n│   ├── hook.ts\n│   ├── README.md\n│   └── styles.ts\n├── stories\n│   └── index.js\n├── test\n│   └── index.js\n├── context.ts\n├── index.ts\n├── types.ts\n└── utils.ts\n```\n\n## Refactoring a component to TypeScript\n\n*Note: This section assumes that the local developer environment is set up correctly, including TypeScript linting. We also strongly recommend using an IDE that supports TypeScript.*\n\nGiven a component folder (e.g. `packages/components/src/unit-control`):\n\n1. Remove the folder from the exclude list in `tsconfig.json`, if it isn’t already.\n2. Remove any `// @ts-nocheck` comments in the folder, if any.\n3. Rename `*.js{x}` files to `*.ts{x}` (except stories and unit tests).\n4. Run `npm run dev` and take note of all the errors (your IDE should also flag them).\n5. Since we want to focus on one component’s folder at the time, if any errors are coming from files outside of the folder that is being refactored, there are two potential approaches:\n\t1. Following those same guidelines, refactor those dependencies first.\n\t\t1. Ideally, start from the “leaf” of the dependency tree and slowly work your way up the chain.\n\t\t2. Resume work on this component once all dependencies have been refactored.\n\t2. Alternatively:\n\t\t1. For each of those files, add `// @ts-nocheck` at the start of the file.\n\t\t2. If the components in the ignored files are destructuring props directly from the function's arguments, move the props destructuring to the function's body (this is to avoid TypeScript errors from trying to infer the props type):\n\n\t\t\t```jsx\n\t\t\t// Before:\n\t\t\tfunction MyComponent( { myProp1, myProp2, ...restProps } ) { /* ... */ }\n\n\t\t\t// After:\n\t\t\tfunction MyComponent( props ) {\n\t\t\t\tconst {  myProp1, myProp2, ...restProps } = props;\n\n\t\t\t\t/* ... */\n\t\t\t}\n\t\t\t```\n\n\t\t3. Remove the folders from the exclude list in the `tsconfig.json` file.\n\t\t4. If you’re still getting errors about a component’s props, the easiest way is to slightly refactor this component and perform the props destructuring inside the component’s body (as opposed as in the function signature) — this is to prevent TypeScript from inferring the types of these props.\n\t\t5. Continue with the refactor of the current component (and take care of the refactor of the dependent components at a later stage).\n6. Create a new `types.ts` file.\n7. Slowly work your way through fixing the TypeScript errors in the folder:\n\t1. Try to avoid introducing any runtime changes, if possible. The aim of this refactor is to simply rewrite the component to TypeScript.\n\t2. Extract props to `types.ts`, and use them to type components. The README can be of help when determining a prop’s type.\n\t3. Use existing HTML types when possible? (e.g. `required` for an input field?)\n\t4. Use the `CSSProperties` type where it makes sense.\n\t5. Extend existing components’ props if possible, especially when a component internally forwards its props to another component in the package.\n\t6. If the component forwards its `...restProps` to an underlying element/component, you should use the `WordPressComponentProps` type for the component's props:\n\n\t\t```tsx\n\t\timport type { WordPressComponentProps } from '../ui/context';\n\t\timport type { ComponentOwnProps } from './types';\n\n\t\tfunction UnconnectedMyComponent(\n\t\t\t// The resulting type will include:\n\t\t\t// - all props defined in `ComponentOwnProps`\n\t\t\t// - all HTML props/attributes from the component specified as the second\n\t\t\t//   parameter (`div` in this example)\n\t\t\t// - the special `as` prop (which marks the component as polymorphic),\n\t\t\t//   unless the third parameter is `false`\n\t\t\tprops:  WordPressComponentProps< ComponentOwnProps, 'div', true >\n\t\t) { /* ... */ }\n\t\t```\n\n\t7. As shown in the previous examples, make sure you have a **named** export for the component, not just the default export ([example](https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/divider/component.tsx)). This ensures that the docgen can properly extract the types data. The naming should be so that the connected/forwarded component has the plain component name (`MyComponent`), and the raw component is prefixed (`UnconnectedMyComponent` or `UnforwardedMyComponent`). This makes the component's `displayName` look nicer in React devtools and in the autogenerated Storybook code snippets.\n\n\t\t```jsx\n\t\tfunction UnconnectedMyComponent() { /* ... */ }\n\n\t\t// 👇 Without this named export, the docgen will not work!\n\t\texport const MyComponent = contextConnect( UnconnectedMyComponent, 'MyComponent' );\n\t\texport default MyComponent;\n\t\t```\n\n\t8. Use JSDocs syntax for each TypeScript property that is part of the public API of a component. The docs used here should be aligned with the component’s README. Add `@default` values where appropriate.\n\t9. Prefer `unknown` to `any`, and in general avoid it when possible.\n8. On the component's main named export, add a JSDoc comment that includes the main description and the example code snippet from the README ([example](https://github.com/WordPress/gutenberg/blob/43d9c82922619c1d1ff6b454f86f75c3157d3de6/packages/components/src/date-time/date-time/index.tsx#L193-L217)). _At the time of writing, the `@example` JSDoc keyword is not recognized by StoryBook's docgen, so please avoid using it_.\n9. Make sure that:\n\t1. tests still pass;\n\t2. storybook examples work as expected.\n\t3. the component still works as expected in its usage in Gutenberg;\n\t4. the JSDocs comments on `types.ts` and README docs are aligned.\n10. Convert Storybook examples to TypeScript (and from knobs to controls, if necessary) ([example](https://github.com/WordPress/gutenberg/pull/39320)).\n\t1. Update all consumers of the component to potentially extend the newly added types (e.g. make `UnitControl` props extend `NumberControl` props after `NumberControl` types are made available).\n\t2. Rename Story extension from `.js` to `.tsx`.\n\t3. Rewrite the `meta` story object, and export it as default. In particular, make sure you add the following settings under the `parameters` key:\n\n\t\t```tsx\n\t\tconst meta: Meta< typeof MyComponent > = {\n\t\t\tparameters: {\n\t\t\t\tcontrols: { expanded: true },\n\t\t\t\tdocs: { canvas: { sourceState: 'shown' } },\n\t\t\t},\n\t\t};\n\t\t```\n\n\t\tThese options will display prop descriptions in the `Canvas ▸ Controls` tab, and expand code snippets in the `Docs` tab.\n\n\t4. Go to the component in Storybook and check the props table in the Docs tab. If there are props that shouldn't be there, check that your types are correct, or consider `Omit`-ing props that shouldn't be exposed.\n\t\t1. Use the `parameters.controls.exclude` property on the `meta` object to hide props from the docs.\n\t\t2. Use the `argTypes` prop on the `meta` object to customize how each prop in the docs can be interactively controlled by the user (tip: use `control: { type: null }` to remove the interactive controls from a prop, without hiding the prop from the docs).\n\t\t3. See the [official docs](https://storybook.js.org/docs/react/essentials/controls) for more details.\n\t5. Comment out all existing stories.\n\t6. Create a default template, where the component is being used in the most “vanilla” way possible.\n\t7. Use the template for the `Default` story, which will serve as an interactive doc playground.\n\t8. Add more focused stories as you see fit. These non-default stories should illustrate specific scenarios and usages of the component. A developer looking at the Docs tab should be able to understand what each story is demonstrating. Add JSDoc comments to stories when necessary.\n11. Convert unit tests.\n\t1. Rename test file extensions from `.js` to `.tsx`.\n\t2. Fix all TypeScript errors.\n\n## Using Radix UI primitives\n\nUseful links:\n\n- [online docs](https://www.radix-ui.com/docs/primitives/overview/introduction)\n- [repo](https://github.com/radix-ui/primitives) — useful for:\n    - inspecting source code\n    - running storybook examples (`yarn install && yarn dev`)\n";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Contributing Guidelines"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:CONTRIBUTINGraw_namespaceObject})]})}var contributing=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()}}}]);