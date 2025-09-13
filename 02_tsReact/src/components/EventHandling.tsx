import { type MouseEvent } from "react"

const EventHandling = () => {

    const handleCLick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log('Button Clicked', e.currentTarget)
    }

    const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
        console.log('Mouse Entered', e.currentTarget)
    } 

  return (
    <div onMouseEnter={handleMouseEnter}>
        <h2>Event Handling Example</h2>
        <button onClick={handleCLick}>Click me</button>
    </div>
  )
}

export default EventHandling