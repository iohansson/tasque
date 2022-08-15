import { useSession, signIn, signOut } from "next-auth/react"

export function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="flex flex-col items-start gap-y-1">
        <div className="flex gap-x-1">
          <span className="text-gray-200">Signed in as</span>
          <span className="text-secondary-200">{session.user.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="border border-gray-200 py-1 px-2 rounded-lg text-gray-200"
        >Sign out</button>
      </div>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}