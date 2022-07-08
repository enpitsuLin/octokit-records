import Header from './Header'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="transition-all duration-300 mx-10 md:(max-w-150 mx-auto)">
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default Layout
