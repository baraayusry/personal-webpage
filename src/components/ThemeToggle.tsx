import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Theme, applyTheme, getInitialTheme, saveTheme } from '@/lib/theme'


export default function ThemeToggle() {
const [theme, setTheme] = useState<Theme>('light')
useEffect(() => {
const initial = getInitialTheme()
setTheme(initial)
applyTheme(initial)
}, [])


function toggle() {
const next = theme === 'light' ? 'dark' : 'light'
setTheme(next)
applyTheme(next)
saveTheme(next)
}


return (
<button
onClick={toggle}
className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm ring-1 ring-slate-300 dark:ring-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
aria-label="Toggle theme"
>
{theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
<span className="hidden sm:inline">{theme === 'light' ? 'Dark' : 'Light'} mode</span>
</button>
)
}