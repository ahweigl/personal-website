import Hero from '@/components/main/Hero'
import Skills from '@/components/main/Skills'
// import Experience from '@/components/main/Experience'

export default function Home() {
  return (
   <main className="h-full w-full">
    <div className = "flex flex-col gap-10 md:gap-20 px-4 md:px-0 pt-4 md:pt-0">
      <Hero/>
      {/* <Experience/> */}
      <Skills/>
    </div>
   </main>
  )
}
