export default function PageHeader({ title, subtitle, right }){
return (
<div className="container-px mb-6 flex items-end justify-between gap-4">
<div>
<h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h1>
{subtitle && <p className="text-zinc-600 dark:text-zinc-200 mt-1">{subtitle}</p>}
</div>
{right}
</div>
);
}