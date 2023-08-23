import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div>
      This is a protected route!
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default SetupPage;
