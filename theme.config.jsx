import { useRouter } from 'next/router'

export default {
  useNextSeoProps() {
    const { pathname } = useRouter()
    if (pathname !== '/') {
      return {
        titleTemplate: '%s – LinqSharp'
      };
    } else {
      return {
        titleTemplate: 'LinqSharp'
      };
    }
  },

  // select site
  head: () => {
    return (
      <>
        <script dangerouslySetInnerHTML={{
          __html: `if (location.hostname !== 'localhost' && location.pathname === '/') {
            var search = new URLSearchParams(location.search);
            var lang = search.get('lang');
            if (lang === null) lang = navigator.language;

            if (lang.startsWith('zh')) {
              location.href = 'https://zh.linqsharp.net';
            }
          }`,
        }}></script>
      </>
    );
  },
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
