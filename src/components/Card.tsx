import { PropsWithChildren } from 'react'


export default function Card({ children }: PropsWithChildren) {
return <div className="card p-6">{children}</div>
}