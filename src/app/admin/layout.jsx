import SessionWrapper from "../../../components/sessionWrapper";

export const metadata = {
  title: "This is admin",
  description: "Its me ShantnuDON",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <SessionWrapper>{children}</SessionWrapper>
    </div>
  );
}
