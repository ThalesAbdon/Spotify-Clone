"use client";
import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
    const uploadModal = useUploadModal();
    const onChange = (open: boolean) => {
        if(!open){
            //Reset the form
            uploadModal.onClose()
        }
    }
    return ( 
        <Modal
        title = "Adicionar uma música!"
        description="Upload uma música em formato mp3"
        isOpen = {uploadModal.isOpen}
        onChange={onChange}
        >
            Form
        </Modal>
     );
}
 
export default UploadModal;