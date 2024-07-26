import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function FormSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group flex h-[2.8rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
    >
      {!pending ? (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </>
      ) : (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
      )}
    </button>
  );
}
