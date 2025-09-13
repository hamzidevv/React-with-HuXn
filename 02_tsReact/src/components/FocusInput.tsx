import { useRef } from "react";

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
        <input type="text" placeholder="Click the button to focus me" ref={inputRef} />
        <button onClick={() => inputRef.current?.focus()}>Click To Focus</button>
    </div>
  )
}
export default FocusInput