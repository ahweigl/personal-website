import Hero from '@/components/main/Hero'
import Bio from '@/components/main/Bio'
import Skills from '@/components/main/Skills'
// import Experience from '@/components/main/Experience'

export default function Home() {
  return (
   <main className="h-full w-full">
    <div className = "flex flex-col px-4 md:px-0 pt-4 md:pt-0">
      <Hero/>
      <div className="h-32 md:h-96"></div>
      <Bio/>
      <Skills/>
      {/* <Experience/> */}
    </div>
   </main>
  )
}
