// JSX = Javascript + XML (HTML)
import { Post } from "./components/Post.js";
import { Header } from "./components/Header.js";
import { Sidebar } from "./components/Sidebar.js";
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gustavuhh1.png',
      name: 'Gustavo Martins',
      role: 'Estágiario TI'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa, O salomão foi promovido a Analista de TI e so faz merda', },
      { type: 'paragraph', content: 'Hoje eu to desenvolvendo em ReactJs, Muito foda!!', },
      { type: 'link', content: 'github.com/gustavuhh1', },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/elishowbr.png',
      name: 'Elisson Victor',
      role: 'Monitor Dev'
    },
    content: [
      { type: 'paragraph', content: 'TUMANU CUN MAN, SI FUDER SOU ESCRIVÃO DE MERDA', },
      { type: 'paragraph', content: 'Fala will, vai te fuder vou dar essa aula não!! vlw vlw', },
      { type: 'link', content: 'github.com/elishowbr', },
    ],
    publishedAt: new Date('2024-09-12 20:00:00'),
  }
]



export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          )


          })}
        </main>
      </div>
    </div>
  )
}


