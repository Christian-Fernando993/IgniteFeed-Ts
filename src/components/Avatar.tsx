import { ImgHTMLAttributes } from "react"; 
import Image from "next/image";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;  
}

export function Avatar({hasBorder = false, ...props}: AvatarProps) {
  return (
    <Image 
      className={ hasBorder ? "w-12 h-12 rounded-lg" : "w-16 h-16 rounded-lg border-4 border-gray-800 outline outline-2 outline-green-500"}
      {...props}      
      alt=""
    />
  );
}
