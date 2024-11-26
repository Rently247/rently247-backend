import LoginForm from "@/components/LoginForm";
import { Toaster } from "react-hot-toast";
export default function Login() {
  return (
    <div className="max-w-md mx-auto mt-20 flex flex-col items-center justify-center">
      <Toaster position="top-right" reverseOrder={false} />
      <LoginForm />
    </div>
  );
}
