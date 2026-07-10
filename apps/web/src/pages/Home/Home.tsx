import AudioUpload from "../../components/AudioUpload/AudioUpload";
import TranslateProgress from "../../components/TranslateProgress/TranslateProgress";
import AudioResult from "../../components/AudioResult/AudioResult";

export default function Home() {
  return (
    <div className="container">
      <h1>YouTube Voice Translator</h1>

      <AudioUpload />

      <br />

      <TranslateProgress />

      <br />

      <AudioResult />
    </div>
  );
}