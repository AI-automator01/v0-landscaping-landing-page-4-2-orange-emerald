"use client"

import { useState } from "react"
import { Check, Loader2, ArrowRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { businessConfig } from "@/lib/config"

export function CtaModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  })

  const filledFields = Object.values(formData).filter(Boolean).length
  const progress = (filledFields / 4) * 100

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            "Name": formData.name,
            "Email": formData.email,
            "Phone": formData.phone,
            "Service": formData.service,
            "Status": "New Lead"
          },
        }),
      })

      if (!response.ok) throw new Error("Failed to submit")

      setIsSuccess(true)

      setTimeout(() => {
        setIsSuccess(false)
        setFormData({ name: "", email: "", phone: "", service: "" })
        onOpenChange(false)
      }, 3000)
    } catch (error) {
      console.error("Submission Error:", error)
      alert("There was an error submitting your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0a1a10] border border-white/10 shadow-2xl sm:max-w-md sm:rounded-[32px] text-white p-0 overflow-hidden">

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-1 bg-white/5 w-full z-50">
          <div
            className="h-full bg-[#da6d42] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-8">
          {isSuccess ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-veridian-green">
                <Check className="h-8 w-8 text-veridian-cream" />
              </div>
              <h3 className="text-xl font-semibold text-veridian-green">Thank You!</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your consultation request has been received. Our design team will
                reach out within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl text-veridian-green">
                  Start Your Transformation
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Tell us about your project and we&apos;ll schedule a complimentary consultation.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="cta-name" className="text-sm font-medium text-veridian-green">
                    Full Name
                  </label>
                  <Input
                    id="cta-name"
                    type="text"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="rounded-xl border-veridian-green/90 bg-veridian-sage/50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="cta-email" className="text-sm font-medium text-veridian-green">
                    Email Address
                  </label>
                  <Input
                    id="cta-email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="rounded-xl border-veridian-green/90 bg-veridian-sage/50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="cta-phone" className="text-sm font-medium text-veridian-green">
                    Phone Number
                  </label>
                  <Input
                    id="cta-phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="rounded-xl border-veridian-green/90 bg-veridian-sage/50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-veridian-green">
                    Service Interest
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleChange("service", value)}
                  >
                    <SelectTrigger className="w-full rounded-xl border-veridian-green/90 bg-veridian-sage/50">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>


                    {/* DROP DOWN LOGIC: Targeting businessConfig.services */}
                    <SelectContent className="rounded-2xl border border-white/10 bg-[#0a1a10] text-white shadow-2xl z-[100]">
                      {businessConfig.services.map((service) => (
                        <SelectItem
                          key={service}
                          value={service}
                          {/* Optional: Add a subtle green highlight when hovering over items */}
                          className="py-3 px-4 text-sm font-medium focus:bg-[#ffffff] focus:text-white cursor-pointer transition-colors"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                </div>



                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-4 flex h-16 w-full items-center justify-center gap-3 rounded-full bg-[#11261a] text-[11px] font-black uppercase tracking-[0.4em] text-white border border-white/50 transition-all hover:bg-[#064e3b] hover:border-white/20 hover:shadow-[0_0_30px_rgba(6,78,59,0.3)] active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Request Consultation
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>


              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}