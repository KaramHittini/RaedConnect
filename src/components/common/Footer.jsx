export default function Footer(){
    return (
        <footer className="mt-16 border-t bg-zinc-100">
            <div className="container-px px-6 md:px-10 py-10 text-sm text-zinc-600 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-between">
                <p>© {new Date().getFullYear()} RadiConnect</p>
                <div className="flex gap-4">
                    <a className="hover:underline" href="https://instagram.com/raed_chakeeb" target="_blank">Instagram</a>
                    <a className="hover:underline" href="mailto:atharalt6w3@gmail.com">atharalt6w3@gmail.com</a>
                    <a className="hover:underline" href="#">WhatsApp Group</a>
                </div>
            </div>
        </footer>
    );
}