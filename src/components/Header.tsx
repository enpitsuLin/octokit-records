'use client'
import { useTheme } from 'next-themes'

const Header: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  return (
    <header className="flex justify-between items-center my-8 md:my-20">
      <div className="text-5xl">
        <span>我看过的</span>
      </div>
      <button
        onClick={() => {
          if (theme === 'system') {
            if (systemTheme == 'dark')
              setTheme('light')
            else setTheme('dark')
          }
          else {
            if (theme == 'dark')
              setTheme('light')
            else setTheme('dark')
          }
        }}
      >
        <ThemeIcon type={theme === 'system' ? systemTheme : theme} />
      </button>
    </header>
  )
}
export default Header

const ThemeIcon: React.FC<{ type: string }> = ({ type }) => {
  if (type === 'dark')
    return <IconMoon />
  else return <IconSun />
}

function IconSun() {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    width="32"
    height="32"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
    />
  </svg>
}

function IconMoon() {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    width="32"
    height="32"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
    />
  </svg>
}
