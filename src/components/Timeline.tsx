import { useEffect, useRef, useState, type ReactNode } from 'react'

type TimelineProps<T> = {
  items: T[]
  children: (item: T, isActive: boolean) => ReactNode
}

const Timeline = <T,>({ items, children }: TimelineProps<T>) => {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    let ticking = false

    const updateActive = () => {
      const els = itemRefs.current.filter(Boolean) as HTMLLIElement[]
      if (!els.length) return

      if (window.scrollY < 8) {
        if (activeIndex !== 0) setActiveIndex(0)
        return
      }
      const viewportCenter = window.innerHeight / 2
      let closest = -1
      let closestDist = Number.POSITIVE_INFINITY
      els.forEach((el, i) => {
        const rect = el.getBoundingClientRect()
        const elCenter = rect.top + rect.height / 2
        const dist = Math.abs(elCenter - viewportCenter)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      })
      if (closest !== -1 && closest !== activeIndex) {
        setActiveIndex(closest)
      }
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActive()
          ticking = false
        })
        ticking = true
      }
    }

    updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [items.length, activeIndex])

  return (
    <ol className="relative border-s border-slate-200 dark:border-slate-800">
      {items.map((item, i) => {
        const isActive = i === activeIndex
        const key = (item as { id?: string | number }).id ?? i
        
        return (
          <li
            key={key}
            ref={(el) => { itemRefs.current[i] = el }}
            className={
              `relative mb-10 ps-8 transition-all duration-300 ease-out will-change-transform ` +
              (isActive ? 'opacity-100 translate-x-0' : 'opacity-75 translate-x-[2px]')
            }
          >
            <div
              className={
                `absolute start-0 -translate-x-1/2 top-3 h-3 w-3 rounded-full border z-0 ` +
                `border-white dark:border-slate-900 transition-all duration-300 ` +
                (isActive
                  ? 'bg-brand-500 ring-2 ring-brand-500/40'
                  : 'bg-slate-300 dark:bg-slate-700')
              }
            />
            <div className="relative z-10">
             
              {typeof children === 'function' ? (
                children(item, isActive)
              ) : process.env.NODE_ENV === 'development' ? (
                <p style={{ color: 'red' }}>
                  Error: The children of Timeline must be a function.
                </p>
              ) : null}
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default Timeline