import { cn } from "./cn";
export default function Button({ as:Comp="button", className, children, ...props }){
return (
<Comp
className={cn(
"inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium shadow-sm transition-all",
"bg-[hsl(var(--brand))] text-[hsl(var(--brand-foreground))] hover:brightness-95 active:scale-[.98]",
className
)}
{...props}
>
{children}
</Comp>
);
}