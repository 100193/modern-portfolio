export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-300">© {new Date().getFullYear()} Alec de Man. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-1">Built with ❤️ using React & Tailwind CSS</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">Creative Developer & Digital Innovator</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
