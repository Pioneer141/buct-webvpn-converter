const Footer = () => (
  <footer className="bg-zinc-200/30 dark:bg-zinc-500/10 p-4 text-center dark:text-gray-400 text-sm">
    Created with love at BUCT
    <br />
    <a
      href="https://engineerlion.tech"
      target="_blank"
      rel="noopener noreferrer"
      className="underline opacity-80 hover:opacity-100 transition-all duration-50"
    >
      Pioneer117
    </a>{' '}
    @ 2020 - {new Date().getFullYear()}
  </footer>
)
export default Footer
