import { useState } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";


export default function UploadDropzone({ onFiles }){
const [hover, setHover] = useState(false);
return (
<motion.label
initial={{ opacity: .9 }}
whileHover={{ scale: 1.02 }}
className={`glass rounded-3xl p-8 w-full flex flex-col items-center justify-center border-2 border-dashed ${hover?"border-zinc-400":"border-zinc-300"}`}
onDragOver={(e)=>{e.preventDefault(); setHover(true);}}
onDragLeave={()=>setHover(false)}
onDrop={(e)=>{
e.preventDefault(); setHover(false);
const files = Array.from(e.dataTransfer.files||[]);
onFiles?.(files);
}}
>
<Upload className="mb-3" />
<p className="text-center text-zinc-700">Drag & drop images here, or click to browse</p>
<input type="file" className="hidden" multiple accept="image/*" onChange={(e)=> onFiles?.(Array.from(e.target.files||[]))} />
</motion.label>
);
}