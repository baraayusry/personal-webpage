const STORAGE_KEY = 'pp-theme'


export type Theme = 'light' | 'dark'


export function getInitialTheme(): Theme {
const saved = localStorage.getItem(STORAGE_KEY) as Theme | null
if (saved) return saved
const mql = window.matchMedia('(prefers-color-scheme: dark)')
return mql.matches ? 'dark' : 'light'
}


export function applyTheme(theme: Theme) {
const root = document.documentElement
if (theme === 'dark') root.classList.add('dark')
else root.classList.remove('dark')
}


export function saveTheme(theme: Theme) {
localStorage.setItem(STORAGE_KEY, theme)
}