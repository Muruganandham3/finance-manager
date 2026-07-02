import type ButtonProps from './ButtonProps';
export default function Button({name,className}:ButtonProps){
    return(
        <button className={className} type="submit">
            {name}
          </button>
    );
}