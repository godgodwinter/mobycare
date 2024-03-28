import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Input } from "@/components/ui/input"
import { FaBeer } from "react-icons/fa";

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  const openModal = () => {
    const modal = document.getElementById('my_modal_2');
    if (modal) {
      //@ts-ignore
      modal.showModal();
    }
  };
  return <div className="p-2">Hello from About!
  
    <div className="p-2">
      <div></div>
      
      <h3>Welcome Home!</h3>
      Lets go for a <FaBeer />?
    <button className="btn" onClick={openModal}>
      open modal
    </button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog> 
    </div>
   
  <Input type="email" placeholder="Email" />
  <div><button className='btn btn-sm btn-twitter'> Tes</button>
  
  <Button  variant="destructive">Click me</Button></div>
  </div>
}