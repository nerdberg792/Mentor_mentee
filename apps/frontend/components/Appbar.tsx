"use client"

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import { useState, useEffect } from "react"
import { useAtom } from "jotai"
import { roleAtom } from "@/store/atoms/roleAtom"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {useUser} from "@clerk/nextjs"

export default function Appbar() {
  const [isMentee, setIsMentee] = useState(false)
  const [role, setRole] = useAtom(roleAtom)
  
  useEffect(() => {
    setRole(isMentee ? "mentee" : "mentor")
  }, [isMentee])
  
  const {isSignedIn} = useUser()
  console.log(isSignedIn)
  
  return (
    <header className="w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {!isSignedIn && (
          <div className="flex items-center space-x-2">
          <Label
            htmlFor="mentorship-toggle"
            className={isMentee ? "text-muted-foreground font-normal" : "font-semibold"}
          >
            Mentor 
          </Label>
          <Switch
            id="mentorship-toggle"
            checked={isMentee}
            onCheckedChange={setIsMentee}
          />
          <Label
            htmlFor="mentorship-toggle"
            className={isMentee ? "font-semibold" : "text-muted-foreground font-normal"}
          >
            Mentee
          </Label>
        </div>

        )}
        
       
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-sm font-medium text-primary hover:underline">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="text-sm font-medium text-primary hover:underline">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div>
      </div>
    </header>
  )
} 