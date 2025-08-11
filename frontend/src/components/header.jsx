export default function Header (){
    return (
        <header className="bg-gradient-to-r from-[#77BEF0] to-[#459cda] shadow-lg">
            <div className="max-w-xl mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo & Company Name */}
                <div className="flex items-center gap-3">
                    
                    <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">Nimbus Technologies</span>
                </div>
            </div>
        </header>
    )
}