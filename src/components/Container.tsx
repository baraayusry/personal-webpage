import { PropsWithChildren } from 'react'


export default function Container({ children }: PropsWithChildren) {
return <div className="container-px mx-auto max-w-6xl">{children}</div>
}