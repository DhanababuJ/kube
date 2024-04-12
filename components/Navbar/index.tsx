export default function Index() {
  return (
    <nav className="w-full h-10 fixed top-5 left-0 px-10">
      <div className="bg-white flex justify-between items-center rounded-l-3xl rounded-r-3xl p-4">
        <div className="text-xl font-bold tracking-wide">KUBE</div>

        {/* MenuItems */}
        <div>Home</div>

        <div className="text-green text-lg">Register</div>
      </div>
    </nav>
  );
}
