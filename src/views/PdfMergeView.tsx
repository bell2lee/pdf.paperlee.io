import {FileUpload} from "primereact/fileupload";

export default function PdfMergeView() {
  const onUpload = (e: any) => {
    console.log(e)
  }

  return (
    <div>
      <h5>Advanced</h5>
      <FileUpload name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000}
                  emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
    </div>
  );
}