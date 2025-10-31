import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import { Card } from "../components/ui/Card";
import UploadDropzone from "../components/ui/UploadDropzone";


export default function Ads(){
const [preview, setPreview] = useState([]);
return (
<div className="container-px max-w-3xl mx-auto">
<div className="text-center mb-6"><h1 className="text-2xl sm:text-3xl font-bold">Ads & Announcements</h1><p className="text-zinc-600 mt-1">Create and publish ads directly in the app.</p></div>
<Card className="max-w-2xl mx-auto">
<UploadDropzone onFiles={(files)=> setPreview(files.map(f=> URL.createObjectURL(f)))} />
{preview.length>0 && (
<div className="grid sm:grid-cols-3 gap-3 mt-4">
{preview.map((src, i)=> <img key={i} src={src} className="rounded-2xl object-cover h-40 w-full" />)}
</div>
)}
<div className="grid sm:grid-cols-2 gap-3 mt-4">
<input className="rc-input" placeholder="Title" />
<select className="rc-select">
<option>Category</option>
<option>Event</option>
<option>Opportunity</option>
<option>Volunteer Work</option>
</select>
</div>
<textarea className="rc-textarea" placeholder="Description" />
</Card>
</div>
);
}