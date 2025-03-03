import RootLayout from "./components/layouts/RootLayout";
import "./globals.css";

const layout = ({children} : {children: React.ReactNode}) => {
  return <RootLayout>{children}</RootLayout>
};

export default layout;