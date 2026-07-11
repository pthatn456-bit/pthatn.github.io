import { useState } from "react";
import { uploadAudio } from "../../services/upload.service";
import { useTranslateStore } from "../../stores/translate.store";
import useTranslate from "../../hooks/useTranslate";

export default function AudioUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);

  const setProgress = useTranslateStore((state) => state.setProgress);

  useTranslate(jobId);

  async function submit() {
    if (!file) {
      alert("Vui lòng chọn file MP3");
      return;
    }

    try {
      const result = await uploadAudio(file);
      console.log(result);
      setJobId(result.job_id);
      setProgress(10);
    } catch (error) {
      console.error(error);
      alert("Không thể tải file lên server");
    }
  }

  return (
    <div className="card">
      <h2>Chọn MP3 tiếng Anh</h2>
      <input
        type="file"
        accept=".mp3"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <br /><br />
      <button onClick={submit}>Dịch sang MP3 tiếng Việt</button>
    </div>
  );
}
