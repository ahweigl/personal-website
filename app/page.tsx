import Image from 'next/image'
import Hero from '@/components/main/Hero'
import Skills from '@/components/main/Skills'
import Projects from '@/components/main/Projects'
import Experience from '@/components/main/Experience'

export default function Home() {
  return (
   <main className="h-full w-full">
    <div className = "flex flex-col gap-20">
      <Hero/>
      <Experience/>
      <Skills/>
      {/* <Projects/> */}
    </div>
   </main>
  )
}
