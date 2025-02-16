import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"




interface SearchBoxProps {
  isOpen: boolean
}



const SearchBar: React.FC<SearchBoxProps> = ({ isOpen }) => {
  const [modal, setModal] = useState(isOpen)
  setModal(isOpen)
  return (
    <div>
      <Dialog open={modal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SearchBar