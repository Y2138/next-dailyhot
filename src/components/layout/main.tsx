

export default function HotMain({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="px-[5%] py-[12px]">
      {children}
    </main>
  )
}