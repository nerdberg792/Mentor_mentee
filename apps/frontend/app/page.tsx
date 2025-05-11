"use client"
import { Button } from "@/components/ui/button"
import { useAtom } from "jotai";
import { roleAtom } from "@/store/atoms/roleAtom";  
import { useRouter } from "next/navigation";
export default function Home() {
  const [role] = useAtom(roleAtom);
  const router = useRouter();
  const getStartedHandler = (role: string) => {
    if(role === "mentee"){
      router.push("/funcs/Mentee/dashboard")
    }else{
      router.push("/funcs/Mentor/dashboard")
    }
  }
  return (
   
    <div>
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Abstract background gradient shapes */}
      <div className="absolute top-[-30%] left-[-20%] w-[60vw] h-[60vw] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-25%] right-[-15%] w-[70vw] h-[70vw] bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>

      {/* Main content */}
      <div className="relative z-10 grid place-items-center min-h-screen p-8 sm:p-20 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Welcome to <span className="text-teal-400">Mentor-Mentee</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg sm:text-xl text-gray-200">
            Empowering connections between mentors and mentees. Let’s grow together.
          </p>
          <Button size="lg" className="text-white bg-teal-500 hover:bg-teal-600"
            onClick={()=>getStartedHandler(role)}
          > 
            Get Started
          </Button>
        </div>
      </div>
    </div>
    </div>
   
  )
}
