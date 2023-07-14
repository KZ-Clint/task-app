import { useContext } from 'react'
import { Context } from './Context'

export default function Layout ({children}) {

  const { theme } = useContext(Context)

  return (
    <>
        <input type="checkbox" style={{display:"none"}} id="theme" checked={theme} />
        <div className="app" > 
              {children}
        </div>
    </>
  )
}

