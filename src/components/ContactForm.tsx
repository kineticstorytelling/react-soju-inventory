
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseName, chooseStyle, chooseFlavor} from '../redux/slices/RootSlice'

// interfaces

interface ContactFormProps{
    id?: string[]
}

const ContactForm = (props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();
  
  const onSubmit = (data:any, event:any) => {
    console.log(`ID: ${props.id}`); 
    // not actually necessary just for visualization^
    if(props.id && props.id.length > 0){
        server_calls.update(props.id[0], data)
        console.log(`Updated: ${ data } ${ props.id }`)
        setTimeout(() => {window.location.reload()}, 500);
        // this reloads the page to the update table once you do an update input
        event.target.reset()
    } else {
        // use dispatch to update our state in our store
        dispatch(chooseName(data.name));
        // the data is coming from below in the return
        dispatch(chooseStyle(data.style));
        dispatch(chooseFlavor(data.flavor));
    
        server_calls.create(store.getState())
        // this will ping the store variable and get the info and create a new user with the info using the create function
        setTimeout(() => {
           window.location.reload() 
        }, 500);
    }
  }
  
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input {...register('name')} name='name' placeholder="Name"/>
                </div>
                <div>
                    <label htmlFor="style">Style</label>
                    <Input {...register('style')} name='style' placeholder="Style"/>
                    {/* register I want useform hook to have access to my input and all the data inside. Want to pass this info as props into props in input tsx which will ultimately send it to the onsubmit function which is part of handlesubmit */}
                </div>
                <div>
                    <label htmlFor="flavor">Flavor</label>
                    <Input {...register('flavor')} name='flavor' placeholder="Flavor"/>
                </div>
                <Button
                    className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                >
                    Submit
                </Button>
            </form>
        </div>
  )
}

export default ContactForm