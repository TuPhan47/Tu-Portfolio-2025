import { Roboto } from 'next/font/google'
import type { Metadata } from "next";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";

const roboto = Roboto({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin','vietnamese']
})

export const metadata: Metadata = {
    title: "Web Developer - Tu Phan",
    description: "Tu Phan is a professional web developer from Ho Chi Minh city. Ask Tu how he could help you or your business online.",
};

const RootLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <html lang="en" className={roboto.className}>
            <body>
                <div id="l-document">
                    <Header />
                    <div id="l-container">
                        {children}
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
};

export default RootLayout;