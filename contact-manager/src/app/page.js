import Link from "next/link"

export default function Home() {
  return (
    <main className="home">
      <div className="cont1">
        <img className="mobile_img" src="backg2.png" alt="cover_image" />
        <div className="text_container">
          <h3 className="cover_heading">Welcome to</h3>
          <h3 className="cover_heading">Your Personal Contact Hub! 🌐✨</h3>
          <h3 className="cover_sub_heading">Stay Connected, Stay Organized.</h3>
          <p className="cover_paragraph">Effortlessly manage and cherish your friendships and relationships with our intuitive Contact Manager. Store, access, and update contact details of friends and loved ones in one secure place. Never lose touch again - because every connection matters.</p>
        </div>
      </div>
      <Link href="/login" className="text-slate-400 transition ease-in-out delay-75 button bg-blue-950 max-w-max items-center my-5 rounded-lg px-4 py-2 md:text-2xl sm:text-lg hover:bg-[#222222] duration-700">Get started now</Link>
      <div className="cont2">
        <img className="comp_img" src="backg1.jpg" alt="cover_image" />
      </div>
    </main>
  )
}
