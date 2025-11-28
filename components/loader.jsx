export default function Loader() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="flex gap-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-150"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
}
