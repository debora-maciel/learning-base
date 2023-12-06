export default function Login() {
  return (
    <div className="w-screen bg-slate-100 h-screen flex items-center justify-center">
      <div className="rounded bg-white shadow-md flex flex-col gap-6 p-2">
        <div className="flex flex-col gap-1">
          <label>Username</label>
          <input  className="rounded border p-2"/>
        </div>
        <div>
            <label>Password </label>
          <input />
        </div>
        <input />
      </div>
    </div>
  );
}
