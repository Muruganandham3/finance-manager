import type {ButtonProps} from './button.ts';
export default function Button({name,className}:ButtonProps){
    return(
        <button className={className} type="submit">
            {name}
          </button>
    );
}