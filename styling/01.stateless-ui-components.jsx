/**
 * Styling in stateless UI components
 * Keep styles separated from the parts of the app that are tied to state.
 * That means routes, views, containers, forms, layouts, etc. should not have any styling or classes in them.
 * Instead, these heavy-lifting components should be composed of primarily stateless functional UI components.
 *
 * @Reference:
 * http://jxnblk.com/writing/posts/patterns-for-style-composition-in-react/
 */

// Form component (with no styles/classNames) - just pure composed components
class SampleComponent extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Heading children='Sign In'/>
        <Input
          name='username'
          value={username}
          onChange={this.handleChange}/>
        <Input
          type='password'
          name='password'
          value={password}
          onChange={this.handleChange}/>
        <Button
          type='submit'
          children='Sign In'/>
      </form>
    )
  }
}

// Presentational component (with Styles)
const Button = ({
  ...props
  }) => {
  const sx = {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'inline-block',
    margin: 0,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    border: 0,
    color: 'white',
    backgroundColor: 'blue',
    WebkitAppearance: 'none',
    MozAppearance: 'none'
  }

  return (
    <button {...props} style={sx}/>
  )
}
