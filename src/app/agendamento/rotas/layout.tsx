
type LayoutProps = {
  children: React.ReactNode,
  explorer: React.ReactNode,
  posts: React.ReactNode,
  terms: React.ReactNode,
}

export default function Layout({children, explorer, posts, terms}:LayoutProps){
  return (
    <>
      <div className="w-screen h-screen bg-slate-700 flex flex-col items-center justify-start gap-7">
        {children}
        <div className="w-4/5 h-1/2 rounded-2xl border border-gray-500 p-5 overflow-scroll">
          {posts}
        </div>
        {explorer}
        {terms}
      </div>
    </>
  )
}