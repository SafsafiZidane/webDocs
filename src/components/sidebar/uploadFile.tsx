import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";






const supabase = createClientComponentClient()
const UploadPDF: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
      }
    };
  
    const uploadPDF = async (id :string) => {
      if (file) {
        const { data, error } = await supabase.storage
          .from('PDF')
          .upload(`file-${id}`, file, { contentType: 'application/pdf' });
  
        if (error) {
          console.error('Error uploading PDF:', error.message);
        } else {
          console.log('PDF uploaded successfully:', data);
          // Handle success, e.g., show a success message
        }
      }
    };
  
    return (
      <div>
        <input type="file"  onClick={uploadPDF} />
      </div>
    );
  };
  
  export default UploadPDF;