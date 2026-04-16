import './FloatingObject.scss';


interface FloatingObjectProps{
    leftx?: number,
    rightx?: number,
    delayTime?: number,
    time?: number
    src: string,
}
export default function FloatingObject({leftx, rightx, delayTime = 0, time=20, src}:FloatingObjectProps) {
    const handlePosition = () => {
        return leftx !== undefined ? {left: leftx, animationDelay: `${delayTime}s`, animationDuration: `${time}s, 2s`} : 
        (rightx !== undefined ? {right: rightx, animationDelay: `${delayTime}s`, animationDuration: `${time}s, 2s`} : 
        { display: "none" });
    }

    return (
        <div className='floatingobject' style={handlePosition()}>
            <img src={src} alt={`Floating object ${src}`} />
        </div>
    )
}