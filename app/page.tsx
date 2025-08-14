import Hero from '@/components/main/Hero'
// import Skills from '@/components/main/Skills'

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col px-4 md:px-0 pt-4 md:pt-0">
        <Hero />
        <div className="w-full md:w-1/2 md:ml-[50%] flex flex-col">
          {/* <Skills/> */}
        </div>
      </div>
    </main>
  )
}
