

export default function Footer() {
  return (
    <footer className="text-black p-4 items-center bg-gradient shadow-lg justify-between flex flex-col animate-fadeIn">
      <p>&copy; {new Date().getFullYear()} Managed By <span className='text-[#DC3C22]'>Nimbus Technologies</span>
      . All rights reserved.</p>
    </footer>
  );
}