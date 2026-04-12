import "./SocialSlide.scss";
import { type JSX } from "react";

type SocialSlideProps = {
    socialname: string,
    image: () => JSX.Element,
    page: string,
    right?:boolean,
    delay?: number
}

export default function SocialSlide({socialname, image, page, right, delay=0}:SocialSlideProps) {
    
    const ImageComponent = image;
    
    return (
        <a href={page} target="blank" className={`social social-animation`} style={right && {flexDirection:"row-reverse", animationDelay: `${delay}s`}||{animationDelay: `${delay}s`}}  >
            <ImageComponent/>
            <p className={`social-name ${right && "social-name-right"}`} style={right ? {textAlign:"right"}:{}}>{socialname}</p>
        </a>
    )
}