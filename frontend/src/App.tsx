import { Github, Settings } from "lucide-react"
import { Button } from './components/ui/button'
import { Separator } from './components/ui/separator'

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* CABEÇALHO */}
      <div className="px-4 py-3 flex items-center justify-between border-b">
        <img src="../public/logo-white.png" className='h-6 w-auto'/>

        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Settings className="w-4 h-4"/>
          </Button>

          <Separator orientation="vertical" className="h-6"/>

          <a href="https://github.com/felipecomarques/picto-viewer-plus" target="_blank">
          <Button variant="outline">
            <Github className="w-4 h-4"/>
          </Button>
          </a>
          
        </div>
      </div>
    </div>
    
  )
}