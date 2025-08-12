

export default function Footer() {
  return (
    <footer className="w-full text-black p-4 items-center bg-gradient shadow-lg justify-between flex flex-col animate-fadeIn sticky bottom-0 left-0">
      <p>&copy; {new Date().getFullYear()} Managed By <span className='text-[#DC3C22]'>Nimbus Technologies</span>
      . All rights reserved.</p>
    </footer>
  );
}