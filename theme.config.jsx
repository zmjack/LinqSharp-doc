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
  banner: {
    key: 'zh-site',
    text: (
      <a href="https://zh.linqsharp.net" target="_blank">
        🎉 推荐访问 LinqSharp 中文站 →
      </a>
    )
  },
  head: () => {
    return (
      <>
        <script dangerouslySetInnerHTML={{
          __html: `if (!localStorage.getItem('zh-site')) {
            if (!navigator.language.startsWith('zh')) {
              localStorage.setItem('zh-site', 0);
            }
          }`,
        }}></script>
      </>
    );
  },
  footer: {
    text: (
      <>
        <span>
          Copyright © 2020 <a href="https://linqsharp.net" target="_blank">
            linqsharp.net
          </a>.
          <br />
          Documentation website powered by <a href="https://nextra.site" target="_blank">
            Nextra
          </a>.
        </span>
      </>
    )
  },
  logo: <img className="logo" src="./logo.svg" alt="LinqSharp" />,
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
