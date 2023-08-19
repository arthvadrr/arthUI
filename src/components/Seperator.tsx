import "../styles/Seperator.scss";

type SeperatorProps = {
    location: string,
    color: string
}

export default function Seperator(props: SeperatorProps) {
    const {location, color} = props

    return (
        <div role="none" className={`${color} ${location} seperator`}>
            
        </div>
    )
}