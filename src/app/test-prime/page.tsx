"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PrimeOnboardingModal } from "@/components/prime";

export default function TestPrimePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Prime Onboarding Modal Test
        </h1>
        <Button
          onClick={() => setModalOpen(true)}
          size="lg"
          className="bg-[#2A60F1] hover:bg-[#3F2CA8] text-white"
        >
          Open Prime Modal
        </Button>
        
        <PrimeOnboardingModal
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      </div>
    </div>
  );
}