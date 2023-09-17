import { Github, Pencil, Trash, RotateCw, Upload, MoreHorizontal, ZoomIn, ZoomOut, Info, Settings, FileType2, AlignJustify, Maximize2 } from "lucide-react"
import { Button } from './components/ui/button'
import { Separator } from './components/ui/separator'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./components/ui/dropdown-menu"
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./components/ui/alert-dialog"
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog"



export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* CABEÇALHO */}
      <div className="px-4 py-3 flex items-center justify-between border-b" draggable="false">
          <img src="/logo-white.png" className='h-6 w-auto select-none' draggable="false"/>

        <div className="flex items-center gap-1">

          <label className="select-none text-sm mr-2" draggable="false">100%</label>
          <Button variant="ghost">
            <ZoomIn className="w-4 h-4"/>
          </Button>

          <Button variant="ghost">
            <ZoomOut className="w-4 h-4"/>
          </Button>

          <Button variant="ghost">
            <RotateCw className="w-4 h-4"/>
          </Button>

          <Separator orientation="vertical" className="h-6"/>

          <Button variant="ghost">
            <Pencil className="w-4 h-4"/>
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" className="hover:bg-red-800">
                <Trash className="w-4 h-4"/>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription> This action cannot be undone</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="gap-2">
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="hover:bg-red-800 hover:text-zinc-50">Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost">
                <MoreHorizontal className="w-4 h-4"/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem> <Info className="w-4 h-4 mr-2" />Information</DropdownMenuItem>
              <DropdownMenuItem> <Maximize2 className="w-4 h-4 mr-2" />Maximize</DropdownMenuItem>
              <DropdownMenuItem> <AlignJustify className="w-4 h-4 mr-2" />Extract text</DropdownMenuItem>
              <DropdownMenuItem> <FileType2 className="w-4 h-4 mr-2" />Convert type</DropdownMenuItem>
              <DropdownMenuItem> Other options...</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem> <Settings className="w-4 h-4 mr-2" />Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        

        <div className="flex items-center gap-2 ml-32">
          <a href="https://github.com/felipecomarques/picto-viewer-plus" target="_blank">
          <Button variant="outline">
            <Github className="w-4 h-4"/>
          </Button>
          </a>
          
        </div>
      </div>

      <main className="flex-1 flex">
        <div className="flex flex-col flex-1">
          <form className="">
            <label 
              htmlFor="image"
              className="border-none flex cursor-pointer text-sm gap-2 items-center select-none justify-center text-muted-foreground h-[calc(100vh-62px)]">
              < Upload className="w-4 h-4" />
              Select an image
            </label>

            <input type="file" id="image" accept="image/*" className="sr-only"/>
          </form>
        </div>
      </main>  
    </div>
    
  )
}