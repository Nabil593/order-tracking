"use client"

import { useState } from "react"
import {
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

interface IssueDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const issueOptions = [
  "Package not received",
  "Wrong delivery location",
  "Package damaged",
  "Package is missing",
]

export function IssueDialog({
  open,
  onOpenChange,
}: IssueDialogProps) {
  const [selectedIssue, setSelectedIssue] = useState(
    issueOptions[0]
  )

  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)

    await new Promise((resolve) =>
      setTimeout(resolve, 900)
    )

    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleClose = (value: boolean) => {
    if (!value) {
      setSubmitted(false)
      setMessage("")
      setSelectedIssue(issueOptions[0])
    }

    onOpenChange(value)
  }

  if (submitted) {
    return (
      <Dialog
        open={open}
        onOpenChange={handleClose}
      >
        <DialogContent>
          <div className="flex flex-col items-center py-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-7 w-7" />
            </div>

            <h2 className="mt-4 text-lg font-bold text-slate-900">
              Issue reported
            </h2>

            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              We have received your report. Our support team will
              review the delivery details and contact you soon.
            </p>

            <Button
              className="mt-6 w-full"
              onClick={() => handleClose(false)}
            >
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog
      open={open}
      onOpenChange={handleClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Report a delivery issue
          </DialogTitle>

          <DialogDescription>
            Tell us what went wrong and we will help you resolve it.
          </DialogDescription>
        </DialogHeader>

        {/* Issue type */}
        <div>
          <label
            htmlFor="issue-type"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            What happened?
          </label>

          <select
            id="issue-type"
            value={selectedIssue}
            onChange={(event) =>
              setSelectedIssue(event.target.value)
            }
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
          >
            {issueOptions.map((issue) => (
              <option
                key={issue}
                value={issue}
              >
                {issue}
              </option>
            ))}
          </select>
        </div>

        {/* Additional message */}
        <div className="mt-4">
          <label
            htmlFor="issue-message"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Additional details
            <span className="ml-1 font-normal text-slate-400">
              (optional)
            </span>
          </label>

          <textarea
            id="issue-message"
            value={message}
            onChange={(event) =>
              setMessage(event.target.value)
            }
            placeholder="Tell us anything that may help..."
            rows={4}
            maxLength={300}
            className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
          />

          <p className="mt-1 text-right text-[11px] text-slate-400">
            {message.length}/300
          </p>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => handleClose(false)}
            disabled={isSubmitting}
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit report
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}