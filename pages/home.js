import Layout from '../components/Layout'
import Counter from '../containers/home/counter'
import Link from 'next/link'
import Router from 'next/router'

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

/* Router.beforePopState(({ url, as, options }) => {
  // I only want to allow these two routes!
  if (as === "/other") {
    // Have SSR render bad routes as a 404.
    window.location.href = '/about'
    console.log('404 router')
    return false
  }

  return true
}) */

class Index extends React.Component {
  static async getInitialProps({req}) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdata(prevProps) {
    console.log('prevProps', prevProps, 'props', this.props)
  }

  render() {
    return (
      <Layout>
        <h1>My Blog</h1>
        <div>
          Hello World {this.props.userAgent}<br/>
          <span onClick={() => Router.push('/?counter=10', { shallow: true })}>Click here</span>
        </div>
        <ul>
          {getPosts().map((post) => (
            <PostLink key={post.id} post={post}/>
          ))}
        </ul>
        <Counter />
        <style jsx>{`
          h1, a {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Index