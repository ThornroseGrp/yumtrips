TITLE: Updating Tailwind CSS to Latest Version via npm
DESCRIPTION: This Bash command updates the Tailwind CSS package to its latest stable version using npm. It is a prerequisite for accessing new features and improvements introduced in recent releases, such as the `forced-color-adjust` utilities in v3.4.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-4/index.mdx#_snippet_16

LANGUAGE: Bash
CODE:
```
$ npm install tailwindcss@latest
```

----------------------------------------

TITLE: Initializing Tailwind CSS Configuration in ES Module
DESCRIPTION: This JavaScript code initializes the Tailwind CSS configuration in an ES module. It defines the content, theme, and plugins for Tailwind CSS. The `export default` statement makes the configuration available for use in other modules.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-3/index.mdx#_snippet_1

LANGUAGE: JavaScript
CODE:
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

----------------------------------------

TITLE: Applying Single-Side Padding with Tailwind CSS
DESCRIPTION: This HTML snippet illustrates how to use specific Tailwind CSS utilities like `pt-<number>`, `pr-<number>`, `pb-<number>`, and `pl-<number>` to control padding on individual sides of an element. Each example targets a different side (top, right, bottom, left) to provide granular control over spacing.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/padding.mdx#_snippet_2

LANGUAGE: html
CODE:
```
<!-- [!code classes:pt-6,pr-4,pb-8,pl-2] -->\n<div class="pt-6 ...">pt-6</div>\n<div class="pr-4 ...">pr-4</div>\n<div class="pb-8 ...">pb-8</div>\n<div class="pl-2 ...">pl-2</div>
```

----------------------------------------

TITLE: Leveraging Modern CSS Features in Tailwind CSS v4.0
DESCRIPTION: This snippet demonstrates how Tailwind CSS v4.0 utilizes modern CSS features like native cascade layers (@layer), color-mix() for color manipulation, and registered custom properties (@property) for advanced styling capabilities. It shows examples of utility classes defined using these features, such as margin-inline for logical properties and color-mix() for opacity adjustments.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx#_snippet_3

LANGUAGE: CSS
CODE:
```
@layer theme, base, components, utilities;

@layer utilities {
  .mx-6 {
    margin-inline: calc(var(--spacing) * 6);
  }
  .bg-blue-500\/50 {
    background-color: color-mix(in oklab, var(--color-blue-500) 50%, transparent);
  }
}

@property --tw-gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
```

----------------------------------------

TITLE: Overriding Dark Mode Variant with Class Selector in CSS
DESCRIPTION: This CSS snippet overrides Tailwind CSS's default `dark` variant behavior. Instead of relying on `prefers-color-scheme`, it configures `dark:*` utilities to apply when an element with the `.dark` class (or any of its descendants) is present in the HTML tree. This allows for manual dark mode toggling via class manipulation.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/dark-mode.mdx#_snippet_1

LANGUAGE: css
CODE:
```
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

----------------------------------------

TITLE: Importing Tailwind CSS Base Layers
DESCRIPTION: This CSS snippet demonstrates the core imports when `tailwindcss` is included in a project. It defines the CSS layers for theme, base, components, and utilities, and then imports the respective CSS files into their designated layers, setting up the foundational structure for Tailwind CSS.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/theme.mdx#_snippet_8

LANGUAGE: css
CODE:
```
@layer theme, base, components, utilities;

@import "./theme.css" layer(theme);
@import "./preflight.css" layer(base);
@import "./utilities.css" layer(utilities);
```

----------------------------------------

TITLE: Importing Tailwind CSS v4.0 in CSS
DESCRIPTION: This CSS line imports the entire Tailwind CSS framework into a project's stylesheet. In v4.0, this single @import rule replaces the previous @tailwind directives, streamlining the process of including Tailwind's base styles, components, and utilities.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx#_snippet_6

LANGUAGE: CSS
CODE:
```
@import "tailwindcss";
```

----------------------------------------

TITLE: Installing Headless UI v2.0 for React
DESCRIPTION: This command installs the latest version of the `@headlessui/react` package from npm, adding Headless UI v2.0 to your project. It is the first step to integrate the library and access its new features.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/headless-ui-v2/index.mdx#_snippet_0

LANGUAGE: sh
CODE:
```
npm install @headlessui/react@latest
```

----------------------------------------

TITLE: Implementing Min-Width Container Queries with Tailwind CSS
DESCRIPTION: This snippet demonstrates how to use native container queries in Tailwind CSS v4.0 without the need for a plugin. It applies a `@container` class to the parent element and uses `@sm:` and `@lg:` variants to define responsive grid column changes based on the container's width.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx#_snippet_16

LANGUAGE: HTML
CODE:
```
<div class="@container">
  <div class="grid grid-cols-1 @sm:grid-cols-3 @lg:grid-cols-4">
    <!-- ... -->
  </div>
</div>
```

----------------------------------------

TITLE: Applying Dark Mode Styles to HTML Elements with Tailwind CSS
DESCRIPTION: This HTML snippet demonstrates how to apply dark mode specific styles using Tailwind CSS's `dark` variant. It shows how to change background colors (`dark:bg-gray-800`), text colors (`dark:text-white`, `dark:text-gray-400`), and other properties when the user's system is in dark mode. The `dark:` prefix conditionally applies the utility class based on the `prefers-color-scheme` media query.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/dark-mode.mdx#_snippet_0

LANGUAGE: HTML
CODE:
```
<!-- [!code word:dark\:bg-gray-800] -->
<!-- prettier-ignore -->
<div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
  <div>
    <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
      <svg class="h-6 w-6 stroke-white" ...>
        <!-- ... -->
      </svg>
    </span>
  </div>
  <!-- prettier-ignore -->
  <!-- [!code word:dark\:text-white] -->
  <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
  <!-- prettier-ignore -->
  <!-- [!code word:dark\:text-gray-400] -->
  <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
```

----------------------------------------

TITLE: Installing Tailwind CSS v3.1 via npm
DESCRIPTION: This command installs the latest version of Tailwind CSS using npm, updating an existing project or setting up a new one with the most recent features and bug fixes.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v3-1/index.mdx#_snippet_0

LANGUAGE: sh
CODE:
```
npm install tailwindcss@latest
```

----------------------------------------

TITLE: Correct Mobile-First Text Alignment with Tailwind CSS - HTML
DESCRIPTION: This HTML snippet showcases the recommended mobile-first approach for responsive text alignment in Tailwind CSS. `text-center` applies centering to all screen sizes by default, while `sm:text-left` then overrides this to left-align text specifically on screens 640px and wider, demonstrating proper progressive enhancement.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#_snippet_6

LANGUAGE: HTML
CODE:
```
<!-- This will center text on mobile, and left align it on screens 640px and wider -->
<div class="text-center sm:text-left"></div>
```

----------------------------------------

TITLE: Responsive Layout for Marketing Component in HTML
DESCRIPTION: This HTML snippet demonstrates building a responsive marketing page component using Tailwind CSS. It utilizes md:flex to switch from a stacked layout on small screens to a side-by-side layout on medium screens, adjusting image dimensions and container width accordingly.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#_snippet_4

LANGUAGE: HTML
CODE:
```
<div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img
        class="h-48 w-full object-cover md:h-full md:w-48"
        src="/img/building.jpg"
        alt="Modern building architecture"
      />
    </div>
    <div class="p-8">
      <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
      <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
        Incredible accommodation for your team
      </a>
      <p class="mt-2 text-gray-500">
```

----------------------------------------

TITLE: Applying Prefixed Utility Classes in Tailwind CSS v4 HTML
DESCRIPTION: In Tailwind CSS v4, prefixes are applied at the beginning of class names, similar to variants. This HTML snippet illustrates how to use a configured prefix (e.g., `tw:`) with utility classes like `tw:flex`, `tw:bg-red-500`, and `tw:hover:bg-red-600`.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#_snippet_33

LANGUAGE: HTML
CODE:
```
<div class="tw:flex tw:bg-red-500 tw:hover:bg-red-600">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Ensuring Accessibility for Unstyled Lists with ARIA Role
DESCRIPTION: This HTML snippet addresses accessibility concerns for unstyled lists by adding `role="list"` to the `<ul>` element. This ensures that screen readers like VoiceOver correctly announce the element as a list, even when `list-style: none` is applied, maintaining semantic meaning for assistive technologies.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/preflight.mdx#_snippet_7

LANGUAGE: HTML
CODE:
```
<ul role="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

----------------------------------------

TITLE: Creating Dynamic Dialog Transitions with Headless UI and React
DESCRIPTION: This example illustrates how to implement a dialog with distinct enter and leave transition styles using stacked data attributes. It uses `data-[closed]:data-[enter]:-translate-x-8` for entering from the left and `data-[closed]:data-[leave]:translate-x-8` for leaving to the right, showcasing advanced transition control.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/2024-06-21-headless-ui-v2-1/index.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
import { Dialog } from "@headlessui/react";
import { useState } from "react";

function Example() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        // [!code highlight:8]
        transition
        className={`
          transition duration-300 ease-out
          data-[closed]:opacity-0
          data-[closed]:data-[enter]:-translate-x-8
          data-[closed]:data-[leave]:translate-x-8
        `}
      >
        {/* Dialog content… */}
      </Dialog>
    </>
  );
}
```

----------------------------------------

TITLE: Sorting Tailwind CSS Classes with Prettier in HTML
DESCRIPTION: This snippet illustrates the automatic class sorting functionality provided by the official Prettier plugin for Tailwind CSS. It demonstrates how the plugin reorders utility classes within an HTML element's `class` attribute to follow a consistent and recommended order, improving readability and maintainability. The 'Before' state shows unsorted classes, while the 'After' state displays the same classes sorted by the plugin.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/editor-setup.mdx#_snippet_0

LANGUAGE: HTML
CODE:
```
<!-- Before -->
<button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">Submit</button>

<!-- After -->
<button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">Submit</button>
```

----------------------------------------

TITLE: Adding Single-Side Margin with Tailwind CSS (HTML)
DESCRIPTION: This snippet demonstrates how to apply margin to a single side of an element using Tailwind CSS utilities. It uses `mt-<number>` for top margin, `mr-<number>` for right margin, `mb-<number>` for bottom margin, and `ml-<number>` for left margin. The number indicates the margin size.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/margin.mdx#_snippet_2

LANGUAGE: HTML
CODE:
```
<!-- [!code classes:mt-6,mr-4,mb-8,ml-2] -->
<div class="mt-6 ...">mt-6</div>
<div class="mr-4 ...">mr-4</div>
<div class="mb-8 ...">mb-8</div>
<div class="ml-2 ...">ml-2</div>
```

----------------------------------------

TITLE: Using Dynamic Grid Column Utilities - HTML
DESCRIPTION: This HTML snippet demonstrates the enhanced flexibility of Tailwind CSS v4.0, allowing dynamic values for utilities like `grid-cols-*`. Users can now specify arbitrary column counts (e.g., `grid-cols-15`) without prior configuration, simplifying grid layout creation.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx#_snippet_13

LANGUAGE: HTML
CODE:
```
<div class="grid grid-cols-15">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Defining Minimum Width Container Query for Large Breakpoint in CSS
DESCRIPTION: This CSS snippet defines a container query that applies styles when the container's width is greater than or equal to 32rem (512px). It corresponds to the `@lg` container breakpoint in Tailwind CSS, enabling responsive design based on parent container dimensions.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#_snippet_171

LANGUAGE: CSS
CODE:
```
@container (width >= 32rem)
```

----------------------------------------

TITLE: Defining Minimum Width Container Query for 5XL Breakpoint in CSS
DESCRIPTION: This CSS snippet defines a container query that applies styles when the container's width is greater than or equal to 64rem (1024px). It corresponds to the `@5xl` container breakpoint in Tailwind CSS, enabling responsive design based on parent container dimensions.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#_snippet_176

LANGUAGE: CSS
CODE:
```
@container (width >= 64rem)
```

----------------------------------------

TITLE: Styling Hover State with Tailwind (HTML)
DESCRIPTION: Shows how to apply styles to an element's hover state using Tailwind CSS state variants in pure HTML. The `hover:` prefix is used before a utility class (e.g., `hover:bg-sky-700`) to apply that style only when the element is hovered, serving as the HTML equivalent of the React example.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/styling-with-utility-classes.mdx#_snippet_5

LANGUAGE: html
CODE:
```
<!-- [!code word:hover\:bg-sky-700] -->
<button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
```

----------------------------------------

TITLE: Defining Minimum Width Container Query for 6XL Breakpoint in CSS
DESCRIPTION: This CSS snippet defines a container query that applies styles when the container's width is greater than or equal to 72rem (1152px). It corresponds to the `@6xl` container breakpoint in Tailwind CSS, enabling responsive design based on parent container dimensions.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#_snippet_177

LANGUAGE: CSS
CODE:
```
@container (width >= 72rem)
```

----------------------------------------

TITLE: Defining `@3xs` Container Query in CSS
DESCRIPTION: This CSS container query applies styles when the container's width is 16rem (256px) or greater. Unlike media queries that target the viewport, container queries enable component-level responsiveness, allowing elements to adapt to their immediate parent's dimensions.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#_snippet_166

LANGUAGE: CSS
CODE:
```
@container (width >= 16rem)
```

----------------------------------------

TITLE: Applying Focus Ring Utilities in HTML
DESCRIPTION: This HTML snippet demonstrates the new `ring` utilities in Tailwind CSS, which provide a better alternative to the `outline` property for focus styles. Classes like `focus:ring-2`, `focus:ring-blue-300`, and `focus:ring-opacity-50` apply a customizable box-shadow ring on focus without affecting layout, improving accessibility and aesthetics.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v2/index.mdx#_snippet_9

LANGUAGE: html
CODE:
```
<button class="focus:ring-opacity-50 focus:ring-2 focus:ring-blue-300 focus:outline-none ...">
  <!-- ... -->
</button>
```

----------------------------------------

TITLE: Importing Tailwind CSS in Main CSS File (CLI Flow) - CSS
DESCRIPTION: This CSS snippet imports the Tailwind CSS framework into your main application stylesheet, preparing it for compilation using the Tailwind CSS CLI.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-alpha/index.mdx#_snippet_18

LANGUAGE: css
CODE:
```
/* [!code filename:app.css] */
@import "tailwindcss";
```

----------------------------------------

TITLE: Replacing Deprecated border-opacity-* with Tailwind CSS Opacity Modifiers
DESCRIPTION: This snippet demonstrates replacing the deprecated `border-opacity-*` utility with the modern Tailwind CSS opacity modifier syntax, such as `border-black/50`, for controlling border color opacity.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#_snippet_7

LANGUAGE: Tailwind CSS
CODE:
```
border-opacity-*
```

LANGUAGE: Tailwind CSS
CODE:
```
border-black/50
```

----------------------------------------

TITLE: Adding Viewport Meta Tag in HTML
DESCRIPTION: This snippet demonstrates how to include the viewport meta tag in the <head> of an HTML document. This tag is crucial for proper responsive behavior across different devices, ensuring the page scales correctly.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#_snippet_2

LANGUAGE: HTML
CODE:
```
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

----------------------------------------

TITLE: Targeting Container Query Ranges in Tailwind CSS HTML
DESCRIPTION: This HTML snippet shows how to target a specific range of container sizes by combining regular and max-width container query variants. The `@sm:@max-md:flex-col` class applies a style only when the container is between its small and medium breakpoints.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#_snippet_16

LANGUAGE: html
CODE:
```
<div class="@container">
  <div class="flex flex-row @sm:@max-md:flex-col">
    <!-- ... -->
  </div>
</div>
```

----------------------------------------

TITLE: Mapping Props to Static Class Name Variants in JSX with Tailwind
DESCRIPTION: This JSX code further illustrates the best practice of mapping component props to complete, static Tailwind class names. This approach allows for flexible styling, such as applying different color shades or text colors based on a single prop, while ensuring all class names are detectable by Tailwind's plain-text scanner.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/detecting-classes-in-source-files.mdx#_snippet_5

LANGUAGE: JSX
CODE:
```
function Button({ color, children }) {
  const colorVariants = {
    blue: "bg-blue-600 hover:bg-blue-500 text-white",
    red: "bg-red-500 hover:bg-red-400 text-white",
    yellow: "bg-yellow-300 hover:bg-yellow-400 text-black"
  };

  return <button className={`${colorVariants[color]} ...`}>{children}</button>;
}
```

----------------------------------------

TITLE: Migrating Vite Configuration to Tailwind CSS v4 Plugin (TypeScript)
DESCRIPTION: This snippet illustrates how to configure Vite to use the new dedicated `@tailwindcss/vite` plugin for Tailwind CSS v4. This migration is recommended for Vite users to achieve improved performance and a better developer experience. It involves importing the new plugin and adding it to the `plugins` array in `vite.config.ts`.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#_snippet_2

LANGUAGE: ts
CODE:
```
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss()
  ]
});
```

----------------------------------------

TITLE: Configuring PostCSS for Tailwind CSS v4.0 - JavaScript
DESCRIPTION: This JavaScript snippet for `postcss.config.js` demonstrates the simplified configuration for Tailwind CSS v4.0. It shows that the `postcss-import` plugin is no longer needed, as Tailwind CSS now provides built-in `@import` support, streamlining the PostCSS setup.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx#_snippet_10

LANGUAGE: JavaScript
CODE:
```
export default {
  plugins: [
    "@tailwindcss/postcss"
  ]
};
```

----------------------------------------

TITLE: Configuring Design Tokens with @theme - CSS
DESCRIPTION: This CSS snippet illustrates the new CSS-first configuration approach in Tailwind CSS v4.0, using the `@theme` directive. It allows defining design tokens like fonts, breakpoints, colors, and easing functions directly within the CSS file, eliminating the need for a separate `tailwind.config.js`.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx#_snippet_11

LANGUAGE: CSS
CODE:
```
@import "tailwindcss";

@theme {
  --font-display: "Satoshi", "sans-serif";

  --breakpoint-3xl: 1920px;

  --color-avocado-100: oklch(0.99 0 0);
  --color-avocado-200: oklch(0.98 0.04 113.22);
  --color-avocado-300: oklch(0.94 0.11 115.03);
  --color-avocado-400: oklch(0.92 0.19 114.08);
  --color-avocado-500: oklch(0.84 0.18 117.33);
  --color-avocado-600: oklch(0.53 0.12 118.34);

  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);

  /* ... */
}
```

----------------------------------------

TITLE: Defining Custom Theme Variables with @theme in CSS
DESCRIPTION: This CSS snippet shows how to define custom theme values like font families, breakpoints, and colors directly within a main.css file using the @theme directive. These CSS variables replace the need for a JavaScript configuration file, making Tailwind CSS feel more CSS-native.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4-alpha/index.mdx#_snippet_4

LANGUAGE: css
CODE:
```
/* [!code filename:main.css] */
@import "tailwindcss";

@theme {
  --font-family-display: "Satoshi", "sans-serif";

  --breakpoint-3xl: 1920px;

  --color-neon-pink: oklch(71.7% 0.25 360);
  --color-neon-lime: oklch(91.5% 0.258 129);
  --color-neon-cyan: oklch(91.3% 0.139 195.8);
}
```

----------------------------------------

TITLE: Defining a Custom CSS Component Class with Tailwind Layers
DESCRIPTION: Illustrates how to create a custom CSS class (`.btn-primary`) using Tailwind's `@layer components` directive and CSS variables derived from the Tailwind theme. This approach is useful for simpler components where a full template partial might be overkill. The HTML shows how to apply this custom class.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/styling-with-utility-classes.mdx#_snippet_31

LANGUAGE: html
CODE:
```
<!-- [!code filename:HTML] -->
<button class="btn-primary">Save changes</button>
```

LANGUAGE: css
CODE:
```
/* [!code filename:CSS] */
@import "tailwindcss";

@layer components {
  .btn-primary {
    border-radius: calc(infinity * 1px);
    background-color: var(--color-violet-500);
    padding-inline: --spacing(5);
    padding-block: --spacing(2);
    font-weight: var(--font-weight-semibold);
    color: var(--color-white);
    box-shadow: var(--shadow-md);
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-violet-700);
      }
    }
  }
}
```

----------------------------------------

TITLE: Transitioning Outline Color with Tailwind CSS HTML
DESCRIPTION: Demonstrates how to handle `outline-color` transitions in Tailwind CSS v4. The first button shows the default transition behavior, while the second button explicitly sets the outline color unconditionally to prevent unwanted transitions from the default color.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/upgrade-guide.mdx#_snippet_42

LANGUAGE: HTML
CODE:
```
<button class="transition hover:outline-2 hover:outline-cyan-500"></button>
<button class="outline-cyan-500 transition hover:outline-2"></button>
```

----------------------------------------

TITLE: Styling with peer-has-checked in JSX/React
DESCRIPTION: This JSX snippet demonstrates how to use Tailwind CSS's `peer` class and `peer-has-checked` variant to conditionally hide an element. The `div` containing the SVG is hidden when the sibling `label`'s descendant `input` (which is also marked `peer`) is checked. It shows a practical example of a to-do list item where a delete icon disappears upon checking the task.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#_snippet_19

LANGUAGE: JSX
CODE:
```
<div className="mx-auto max-w-md border-x border-x-gray-200 px-4 py-6 dark:border-x-gray-800 dark:bg-gray-950/10">
      <fieldset className="space-y-3">
        <legend className="text-base font-semibold text-gray-900 dark:text-white">Today</legend>
        <div className="grid grid-cols-[1fr_24px] items-center gap-6">
          <label className="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2 hover:bg-gray-100 dark:hover:bg-white/5">
            <input
              type="checkbox"
              className="peer size-3.5 appearance-none rounded-sm border border-gray-300 accent-pink-500 checked:appearance-auto dark:border-gray-600 dark:accent-pink-600"
              defaultChecked
            />
            <span className="text-gray-700 select-none peer-checked:text-gray-400 peer-checked:line-through dark:text-gray-300">
              Create a to do list
            </span>
          </label>
          <div className="size-[26px] rounded-md p-1 peer-has-checked:hidden hover:bg-red-50 hover:text-pink-500">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_24px] items-center gap-6">
          <label className="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2 hover:bg-gray-100 dark:hover:bg-white/5">
            <input
              type="checkbox"
              className="peer size-3.5 appearance-none rounded-sm border border-gray-300 accent-pink-500 checked:appearance-auto dark:border-gray-600 dark:accent-pink-600"
            />
            <span className="text-gray-700 select-none peer-checked:text-gray-400 peer-checked:line-through dark:text-gray-300">
              Check off first item
            </span>
          </label>
          <div className="size-[26px] rounded-md p-1 peer-has-checked:hidden hover:bg-red-50 hover:text-pink-500">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_24px] items-center gap-6">
          <label className="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2 hover:bg-gray-100 dark:hover:bg-white/5">
            <input
              type="checkbox"
              className="peer size-3.5 appearance-none rounded-sm border border-gray-300 accent-pink-500 checked:appearance-auto dark:border-gray-600 dark:accent-pink-600"
            />
            <span className="text-gray-700 select-none peer-checked:text-gray-400 peer-checked:line-through dark:text-gray-300">
              Investigate race condition
            </span>
          </label>
          <div className="block size-[26px] rounded-md p-1 peer-has-checked:hidden hover:bg-red-50 hover:text-pink-500">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </fieldset>
    </div>
```

----------------------------------------

TITLE: Avoiding Dynamic Class Names from Props in JSX with Tailwind
DESCRIPTION: This JSX code shows an incorrect method of constructing Tailwind class names using string interpolation with component props. Since Tailwind scans files as plain text, it cannot resolve `bg-${color}-600` into complete class names like `bg-blue-600`, resulting in missing styles.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/detecting-classes-in-source-files.mdx#_snippet_3

LANGUAGE: JSX
CODE:
```
function Button({ color, children }) {
  return <button className={`bg-${color}-600 hover:bg-${color}-500 ...`}>{children}</button>;
}
```

----------------------------------------

TITLE: Simplifying HTML Form Input with Headless UI React
DESCRIPTION: This snippet shows how Headless UI v2.0 simplifies the creation of accessible form fields. By using `Field`, `Label`, `Input`, and `Description` components, the tedious work of wiring up IDs and `aria-*` attributes is automated, resulting in cleaner and more maintainable code.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/headless-ui-v2/index.mdx#_snippet_4

LANGUAGE: jsx
CODE:
```
import { Description, Field, Input, Label } from "@headlessui/react";

function Example() {
  return (
    <Field>
      <Label>Name</Label>
      <Input name="your_name" />
      <Description>Use your real name so people will recognize you.</Description>
    </Field>
  );
}
```

----------------------------------------

TITLE: Implementing Basic Container Queries in Tailwind CSS HTML
DESCRIPTION: This HTML snippet illustrates the basic usage of Tailwind CSS container queries. It marks a parent element with `@container` and then applies responsive styles to its children using `@md:flex-row`, which changes the flex direction when the container reaches its medium size.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#_snippet_14

LANGUAGE: html
CODE:
```
<div class="@container">
  <div class="flex flex-col @md:flex-row">
    <!-- ... -->
  </div>
</div>
```

----------------------------------------

TITLE: Using Arbitrary Container Query Values in HTML
DESCRIPTION: This HTML snippet demonstrates the use of arbitrary container query values, such as `@min-[475px]`, for one-off responsive styling without modifying the theme. When the `@container` element's width is at least `475px`, the child element's flex direction will change from `flex-col` to `flex-row`, providing flexible, on-the-fly breakpoint control.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#_snippet_20

LANGUAGE: html
CODE:
```
<div class="@container">
  <div class="flex flex-col @min-[475px]:flex-row">
    <!-- ... -->
  </div>
</div>
```

----------------------------------------

TITLE: Applying Max-width Container Queries in Tailwind CSS HTML
DESCRIPTION: This HTML snippet demonstrates how to use max-width container query variants in Tailwind CSS. The `@max-md:flex-col` class applies a style (changes flex direction to column) when the container's width is below its medium breakpoint.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/responsive-design.mdx#_snippet_15

LANGUAGE: html
CODE:
```
<div class="@container">
  <div class="flex flex-row @max-md:flex-col">
    <!-- ... -->
  </div>
</div>
```

----------------------------------------

TITLE: Applying box-border Utility in HTML
DESCRIPTION: Demonstrates the use of the `box-border` utility in HTML to set an element's `box-sizing` to `border-box`. This ensures that an element's specified width and height include its padding and border, affecting the internal content area. It illustrates how a 128px x 128px element with padding and border maintains its declared dimensions.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/box-sizing.mdx#_snippet_0

LANGUAGE: html
CODE:
```
<!-- [!code classes:box-border] -->
<div class="box-border size-32 border-4 p-4 ...">
  <!-- ... -->
</div>
```

----------------------------------------

TITLE: Basic Element Positioning with Tailwind CSS in HTML
DESCRIPTION: This HTML snippet illustrates how to use Tailwind CSS positioning utilities such as `top-0`, `left-0`, `inset-x-0`, `inset-y-0`, `inset-0`, `right-0`, and `bottom-0` to control the placement of absolutely positioned child elements within a relative parent. It covers pinning to corners, spanning edges, and filling the parent.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/top-right-bottom-left.mdx#_snippet_1

LANGUAGE: HTML
CODE:
```
<!-- [!code classes:inset-x-0,inset-y-0,inset-0,right-0,left-0,top-0,bottom-0] -->
<!-- Pin to top left corner -->
<div class="relative size-32 ...">
  <div class="absolute top-0 left-0 size-16 ...">01</div>
</div>

<!-- Span top edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-x-0 top-0 h-16 ...">02</div>
</div>

<!-- Pin to top right corner -->
<div class="relative size-32 ...">
  <div class="absolute top-0 right-0 size-16 ...">03</div>
</div>

<!-- Span left edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-y-0 left-0 w-16 ...">04</div>
</div>

<!-- Fill entire parent -->
<div class="relative size-32 ...">
  <div class="absolute inset-0 ...">05</div>
</div>

<!-- Span right edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-y-0 right-0 w-16 ...">06</div>
</div>

<!-- Pin to bottom left corner -->
<div class="relative size-32 ...">
  <div class="absolute bottom-0 left-0 size-16 ...">07</div>
</div>

<!-- Span bottom edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-x-0 bottom-0 h-16 ...">08</div>
</div>

<!-- Pin to bottom right corner -->
<div class="relative size-32 ...">
  <div class="absolute right-0 bottom-0 size-16 ...">09</div>
</div>
```

----------------------------------------

TITLE: Applying Typography Styles with Tailwind CSS Prose Classes (HTML)
DESCRIPTION: This HTML snippet demonstrates how to apply typographic styles to a block of content using the @tailwindcss/typography plugin. By adding the 'prose' class (and responsive variants like 'lg:prose-xl') to an <article> element, all nested vanilla HTML content (like <h1> and <p> tags) will automatically receive beautiful, well-formatted typographic defaults. This eliminates the need for extensive custom CSS to style rich-text content.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-typography/index.mdx#_snippet_0

LANGUAGE: HTML
CODE:
```
<article class="prose lg:prose-xl">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the
    food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around
    the country.
  </p>
  <!-- ... -->
</article>
```

----------------------------------------

TITLE: Styling Sibling Elements with peer-invalid for Form Validation in HTML
DESCRIPTION: This example demonstrates how to apply styles to a sibling element based on the state of a `peer` element, specifically using `peer-invalid` for form validation. The `peer` class is added to the input field, and a subsequent sibling paragraph uses `peer-invalid:visible` to show an error message when the input is invalid. This pattern allows for dynamic UI updates without JavaScript.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/hover-focus-and-other-states.mdx#_snippet_31

LANGUAGE: html
CODE:
```
<div className="mx-auto max-w-md border-x border-x-gray-200 px-6 pt-6 pb-5 dark:border-x-gray-800 dark:bg-gray-950/10">
  <form>
    <div>
      <label htmlFor="email-2" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Email
      </label>
      <div className="mt-1">
        <input
          type="email"
          name="email"
          id="email-2"
          className="peer block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none sm:text-sm"
          defaultValue="george@krugerindustrial."
          placeholder="you@example.com"
        />
        <p className="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
          Please provide a valid email address.
        </p>
      </div>
    </div>
  </form>
</div>
```

LANGUAGE: html
CODE:
```
<!-- [!code classes:peer-invalid:visible] -->
<!-- [!code classes:peer] -->
<form>
  <label class="block">
    <span class="...">Email</span>
    <input type="email" class="peer ..." />
    <p class="invisible peer-invalid:visible ...">Please provide a valid email address.</p>
  </label>
</form>
```

----------------------------------------

TITLE: HTML Example for Class-based Dark Mode Toggling
DESCRIPTION: This HTML snippet demonstrates how the `dark` class is applied to the `<html>` element to activate dark mode utilities. When the `dark` class is present, `dark:bg-black` will override `bg-white`, changing the background color. This setup requires JavaScript to dynamically add or remove the `dark` class.
SOURCE: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/dark-mode.mdx#_snippet_2

LANGUAGE: html
CODE:
```
<html class="dark">
  <body>
    <div class="bg-white dark:bg-black">
      <!-- ... -->
    </div>
  </body>
</html>
```