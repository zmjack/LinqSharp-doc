export default {
  logo: <span>LinqSharp</span>,
  project: {
    link: 'https://github.com/zmjack/linqsharp'
  },
  // ... other theme options
  docsRepositoryBase: 'https://github.com/zmjack/linqsharp-doc',
  search: {
    placeholder: 'Search...'
  },
  toc: {
    title: 'On This Page'
  },
  editLink: {
    text: 'Edit this page',
    component: function (props) {
      return (
        <a
          className={props.className}
          href={`https://github.com/zmjack/linqsharp-doc/blob/main/${props.filePath}`}
        >
          {props.children}
        </a>
      );
    }
  },
  feedback: {
    useLink: () => 'https://github.com/zmjack/linqsharp/issues/new?labels=feedback',
    content: 'Question? Give us feedback →'
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      }
    }
  }
}
