import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            <Post 
              author="Daiane Fernandes"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, asperiores repellat commodi explicabo tempore sequi adipisci ipsam modi repudiandae, dolorum iste culpa minus labore rem vero repellendus cum perspiciatis aspernatur."
            />
            <Post 
              author="Deyvid Fernandes"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, asperiores repellat commodi explicabo tempore sequi adipisci ipsam modi repudiandae, dolorum iste culpa minus labore rem vero repellendus cum perspiciatis aspernatur."
            />
        </main>
      </div>
    </>
  )
}

export default App


