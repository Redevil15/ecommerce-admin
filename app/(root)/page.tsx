"use client"

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div>
      <Modal isOpen onClose={() => { }} title="test" description="description">
        Children
      </Modal>
    </div>
  )
}

export default SetupPage;
