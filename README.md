# 🪅cssier

`cssier` is a React component library designed to simplify inline styling for pseudo-classes and pseudo-elements. With `cssier`, you can easily manage and apply custom styles for standard HTML and SVG elements, making your styling both dynamic and maintainable.

## Features

- **Pre-built Components**: Import ready-to-use React components for HTML and SVG tags.
- **Advanced Styling**: Use the `useStylesheet` hook to manage custom styles for pseudo-classes and pseudo-elements.
- **TypeScript Support**: Includes TypeScript definitions for a smoother development experience.
- **Storybook Integration**: Automatically generates Storybook stories for visual testing and documentation.
- **Public Storybook**: Explore and interact with the components live at [cssier.danberman.dev](https://cssier.danberman.dev).

## Installation

To install `cssier`, use npm, Yarn, or pnpm:

```bash
npm install cssier
```

or with Yarn:

```bash
yarn add cssier
```

or with pnpm:

```bash
pnpm add cssier
```

## Usage

### Importing Components

You can import pre-built React components for HTML and SVG tags from `cssier/components`:

```jsx
import { Button, Svg } from 'cssier/components'

const MyComponent = () => (
  <div>
    <Button onClick={() => alert('Clicked!')}>Click Me</Button>
    <Svg width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
    </Svg>
  </div>
)
```

### Using the `useStylesheet` Hook

The `useStylesheet` hook from `cssier/hooks` allows you to apply styles for pseudo-classes (`:hover`, `:focus`, etc.) and pseudo-elements (`::before`, `::after`, etc.) directly to your components.

#### Values Returned by `useStylesheet`

The `useStylesheet` hook returns an array where:

- The first element is a unique CSS class ID that can be applied to the component.
- The second element is a string of CSS styles that were injected into the document. This is useful for debugging, though you typically won't need to use it in production.

```jsx
import { useStylesheet } from 'cssier/hooks'

const CustomComponent = (props) => {
  const { pseudo, pseudoId: id, ...rest } = props
  const [pseudoId, css] = useStylesheet(pseudo, id)

  return (
    <>
      <style>{css}</style>
      <div {...rest} className={`${rest.className ?? ''}pseudoId`}>
        Styled with pseudo-classes and pseudo-elements!
      </div>
    </>
  )
}
```

#### Example of Custom Styling with Pseudo-classes

```jsx
<CustomComponent
  pseudo={{
    hover: { backgroundColor: 'lightblue' },
    focus: { outline: '2px solid blue' },
  }}
  pseudoId="custom-id"
>
  Hover or focus on me!
</CustomComponent>
```

#### Example of Custom Styling with Pseudo-elements

```jsx
<CustomComponent
  pseudo={{
    before: { content: '"Prefix"', color: 'gray' },
    after: { content: '"Suffix"', color: 'gray' },
  }}
  pseudoId="custom-id"
>
  Content with pseudo-elements
</CustomComponent>
```

### Dynamic Hover Color Example Using `<Button />`

Here's an example of using the `<Button />` component from `cssier` to create a button that changes its hover color each time it is clicked:

```jsx
import { useState } from 'react'
import { Button } from 'cssier/components'

const DynamicButton = () => {
  const [colorIndex, setColorIndex] = useState(0)
  const colors = ['lightblue', 'lightcoral', 'lightgreen', 'lightgoldenrodyellow']

  const handleClick = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
  }

  return (
    <Button
      pseudo={{
        hover: { backgroundColor: colors[colorIndex] },
      }}
      onClick={handleClick}
    >
      Click me to change hover color!
    </Button>
  )
}
```

### Props and Compatibility

The components provided by `cssier` accept all standard props for their HTML or SVG counterparts. For example, a `<Button>` component will accept props such as `onClick`, `disabled`, `type`, etc., just like a native HTML `<button>` element.

## Public Storybook

Explore and interact with the `cssier` components in our publicly available Storybook at [cssier.danberman.dev](https://cssier.danberman.dev). This is a great way to see the components in action and understand how different styles and props affect their appearance.

## Contributing

To contribute to `cssier`:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a Pull Request on GitHub.

## License

`cssier` is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Additional Resources

- [GitHub Repository](https://github.com/DanBermanTech/cssier) – Source code and issue tracking.
- [Storybook Documentation](https://storybook.js.org/) – Learn how to use Storybook with your components.

Thank you for choosing `cssier`! We hope it makes managing your styles more intuitive and flexible.
