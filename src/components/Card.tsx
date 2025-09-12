import { PropsWithChildren } from 'react'

export default function Card({ children }: PropsWithChildren) {
  return (
    <div
      className="group card p-6 h-full flex flex-col hover:bg-slate-100 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 backdrop-blur-lg rounded-xl border border-slate-700 rounded-lg"
    >
      {children}
    </div>
  )
}
