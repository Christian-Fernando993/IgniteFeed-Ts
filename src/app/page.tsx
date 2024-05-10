import { Header } from "@/components/Header";

import { Post } from "@/components/Post";
import { Sidebar } from "@/components/Sidebar";
import  { PostType } from '@/components/Sidebar'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Christian-Fernando993.png',
      name: 'Christian Borges',
      role: 'Front End',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2024-05-10 09:20:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/joaonetogit.png',
      name: 'João Pinheiro',
      role: 'Estudante de Front End',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'AAAAAAcabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2024-04-25 17:00:00')
  }
]

export default function Home() {
  return (
  <div>
    <Header />

    <div className='w-full max-w-6xl my-8 m-auto px-4 grid grid-cols-1 @laptop:grid-cols-wrapper gap-8 items-start'>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              post={post}
            />
          )
        })}

      </main>
    </div>
  </div>
  );
}

